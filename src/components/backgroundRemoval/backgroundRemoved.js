import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Image, Stack } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { EraserModal } from "../modal";
import errorImg from "./../../asserts/err.jpg";

const BackgroundRemoved = ({ btnAction }) => {
  const [modalMessage, setModalMessage] = useState();

  //redux selector
  const result = useSelector((state) => state.backgroundRemover.result);
  const status = useSelector((state) => state.backgroundRemover.status);

  //modal state
  const [modalShow, setModalShow] = useState(false);

  //hide Modal & go back to upload component
  const handleModalHide = () => {
    setModalShow(false);
    btnAction("upload");
  };

  //download image without background
  const handleDownload = () => {
    if (status === "succeeded" && result) {
      const link = document.createElement("a");
      link.href = result;
      link.download = "removed_background.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      //when done display Advertisement Modal
      setModalMessage("Image Downloaded !!");
      setModalShow(true);
    } else {
      //display Advertisement Modal with Error Msg
      setModalMessage("Error!, Image Download Failed. Try Again");
      setModalShow(true);
      console.error("Download Error: ", status, result);
    }
  };

  return (
    <Stack className="d-flex justify-content-center mt-2">
      {status === "loading" && (
        <div className="mx-auto d-block mt-4 justify-content-center">
          <Spinner
            className="mx-auto d-block "
            animation="border"
            variant="primary"
            id="spinner-ball"
          />
          <p className="mt-4 mb-4 lh-1.6 fw-light text-center">
            Please wait, Erasing Background......
          </p>
        </div>
      )}

      {status === "succeeded" && (
        <div className="mx-auto d-block mt-4 justify-content-center">
          <Image
            width="250"
            height="250"
            fluid
            className="mx-auto d-block mb-4 border border-2 border-secondary rounded"
            src={result}
            alt="Result"
          />
          <Button
            style={{ background: "rgb(140, 77, 249)" }}
            className="mb-4 btn-lg mx-auto d-block"
            onClick={handleDownload}
          >
            Download Image
          </Button>
        </div>
      )}
      {status === "failed" && (
        <div className="mx-auto d-block mt-4 justify-content-center">
          <Image
            width="250"
            height="250"
            fluid
            className="mx-auto d-block"
            src={errorImg}
            alt="error-img"
          />
          <p className="mb-4 lh-1.6 fw-light text-center">
            Error removing background...
          </p>
          <Button
            id="tryAgain-btn"
            variant="primary"
            className="mb-4 mx-auto d-block btn-lg"
            onClick={() => btnAction("upload")}
          >
            Try Again
          </Button>
        </div>
      )}
      <EraserModal
        show={modalShow}
        title={modalMessage}
        onHide={handleModalHide}
      />
    </Stack>
  );
};

export default BackgroundRemoved;
