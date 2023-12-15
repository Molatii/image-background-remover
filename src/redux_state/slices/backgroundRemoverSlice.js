import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiKey = process.env.REACT_APP_BG_KEY;

//async thunk is used to handle the API request
export const removeBackground = createAsyncThunk(
  "backgroundRemover/removeBackground",
  async (selectedImage) => {
    const formData = new FormData();
    formData.append("image_file", selectedImage);

    const response = await axios.post(
      "https://api.remove.bg/v1.0/removebg",
      formData,
      {
        headers: {
          "X-Api-Key": apiKey,
        },
        responseType: "arraybuffer",
      }
    );
    //Convert the binary data to a Blob
    const blob = new Blob([response.data], { type: "image/png" });

    // Create a Blob URL
    const imgUrl = URL.createObjectURL(blob);

    return imgUrl;
  }
);

//Redux slice to manage the state
const backgroundRemoverSlice = createSlice({
  name: "backgroundRemover",
  initialState: { result: null, status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(removeBackground.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeBackground.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.result = action.payload;
      })

      .addCase(removeBackground.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default backgroundRemoverSlice.reducer;
