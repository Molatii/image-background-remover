import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BackgroundRemoved from "../components/backgroundRemoval/backgroundRemoved";

// Mock the Redux store
const mockStore = configureStore([]);

describe("BackgroundRemoved component", () => {
  it("renders loading state correctly", () => {
    const store = mockStore({
      backgroundRemover: { status: "loading" },
    });

    render(
      <Provider store={store}>
        <BackgroundRemoved btnAction={() => {}} />
      </Provider>
    );

    const loadingText = screen.getByText(/Please wait, Erasing Background/i);
    expect(loadingText).toBeInTheDocument();
  });
    

 it("renders succeeded state correctly and triggers download", () => {
   const mockResult =
     "https://tse3.mm.bing.net/th?id=OIP.8amkcxCP5S_ElaU0-8cuOAHaE8&pid=Api&P=0&h=220";
   const store = mockStore({
     backgroundRemover: { status: "succeeded", result: mockResult },
   });


   render(
     <Provider store={store}>
       <BackgroundRemoved btnAction={() => {}} />
     </Provider>
   );

   const downloadButton = screen.getByText(/Download Image/i);
   expect(downloadButton).toBeInTheDocument();


 });

  

       
  it("renders failed state correctly", () => {
    const store = mockStore({
      backgroundRemover: { status: "failed" },
    });

    render(
      <Provider store={store}>
        <BackgroundRemoved btnAction={() => {}} />
      </Provider>
    );

    const errorImage = screen.getByAltText("error-img");
    expect(errorImage).toBeInTheDocument();

    const tryAgainButton = screen.getByText(/Try Again/i);
    expect(tryAgainButton).toBeInTheDocument();

  });
});
