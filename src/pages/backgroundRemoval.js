import Header from "../components/header";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Advertisement from "./../components/advertisement";
import "./../App.css";
import { useState } from "react";
import UploadImg from "../components/backgroundRemoval/uploadImg";
import BackgroundRemoved from "../components/backgroundRemoval/backgroundRemoved";

function BackGroundRemoval() {
  const [stage, setStage] = useState("upload");
 
const handleButtonClick = (nextStage) => {
  setStage(nextStage);
};
  return (
    <>
      <Header />
      <Container>
        <div className="p-4" style={{ marginTop: "140px", marginBottom: "140px" }}>
          <Advertisement />
          <hr />
          <h3 className="h3-highlight">Remove Background</h3>
          {stage === "upload" && <UploadImg btnAction={handleButtonClick} />}

          {stage === "backgroundRemoved" && (
            <BackgroundRemoved btnAction={handleButtonClick} />
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default BackGroundRemoval;
