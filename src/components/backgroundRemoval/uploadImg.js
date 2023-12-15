import React, { useState } from "react";
import UploadIcon from "./../../asserts/uploadd-icon.png";
import { Button, Image, Stack } from "react-bootstrap"; 
import { useDispatch } from "react-redux";
import { removeBackground } from "../../redux_state/slices/backgroundRemoverSlice";
  
const UploadImg = ({ btnAction }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch();

  //upload image
  const upLoadImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  //use dispatch to sent request
  const removeBackgroundImg = () => {
    if (selectedImage) {
      dispatch(removeBackground(selectedImage));
      //switch to background removed image component
      btnAction("backgroundRemoved");
    }
  };

  return (
    <Stack
      direction="vertical"
      className="mx-auto d-flex justify-content-center mt-4"
    >
      {!selectedImage && (
        <Image
          src={UploadIcon}
          alt="upload-icon"
          fluid
          className="mx-auto d-block"
        />
      )}
      {selectedImage && (
        <div className="mx-auto d-block">
          <Image
            src={URL.createObjectURL(selectedImage)}
            alt="SelectedImage"
            width="250"
            height="250"
            fluid
            className="mx-auto d-block border border-2 border-secondary rounded "
          />
          <p className="mt-2 text-muted text-center">
            File Size: {Math.round(selectedImage.size / 1024)} KB
          </p>
        </div>
      )}
      <div className="justify-content-center mx-auto d-block">
        <input
          type="file"
          accept="image/*"
          onChange={upLoadImage}
          style={{ display: "none" }}
          id="upload-input"
        />
        {!selectedImage && (
          <label htmlFor="upload-input">
            <Button
              style={{ background: "rgb(140, 77, 249)" }}
              className="mb-4 btn-lg"
              as="span"
            >
              Upload Image
            </Button>
          </label>
        )}
        {selectedImage && (
          <Stack direction="vertical">
            <label
              htmlFor="upload-input"
              className="mx-auto d-block justify-content-center"
            >
              <Button className="mb-2 btn-md bg-secondary" as="span">
                Upload Again
              </Button>
            </label>
            <Button
              style={{ background: "rgb(140, 77, 249)" }}
              className="mb-4 mx-auto d-block btn-lg"
              onClick={removeBackgroundImg}
            >
              Remove Image Background
            </Button>
          </Stack>
        )}
      </div>
      <p className="text-center mb-4">
        (Accepted Image Formats are jpg, png & jpeg)
      </p>
    </Stack>
  );
};

export default UploadImg;
