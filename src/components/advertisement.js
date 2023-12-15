import React from "react";
import "./../App.css"
import { Stack, Image } from "react-bootstrap";
import adPic from "./../asserts/ad-icon.png"

const Advertisement = () => {
  const showAdvert = false;
  return (
    <div>
      
      <Stack
        direction="vertical"
        className="d-flex justify-content-center bg-light"
      >
        <div className="mx-auto d-block">
          {!showAdvert && (
            <Image
              src={adPic}
              alt="ad-placeholder"
              fluid
              className="mx-auto d-block"
              style={{ width: "100%", height: "140px" }}
            />
          )}
          {showAdvert && (
            <div
              style={{ width: "100%", height: "140px" }}
              className="mx-auto d-block justify-content-center"
            >
              <p>show advertisement here</p>
            </div>
          )}
        </div>
      </Stack>
    </div>
  );
};

export default Advertisement;
