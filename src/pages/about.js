import Footer from "../components/footer";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import AboutPic from "./../asserts/about.jpg";
import "./../App.css";

function About() {
  return (
    <>
      <Header />
      <Container>
        <div className="p-4" style={{ marginTop: "140px" }}>
          <Image
            className="mb-4  mx-auto d-block justify-content-center"
            alt="about-us-img"
            src={AboutPic}
            fluid
          />
          <h3 className="h3-highlight">Who We Are</h3>
          <p>
            Welcome to <span className="fw-bold">Background remover</span>, where
            innovation meets creativity. We are a dedicated team of
            professionals driven by the passion to redefine simplicity in image
            editing. At our Company Name, we believe in the power of visual
            storytelling and understand that every image has a unique narrative
            waiting to be uncovered. Our journey began with a shared vision to
            empower individuals and businesses by providing a seamless solution
            for background removal.
          </p>
          <p>
            In a world inundated with complex design tools, we stand out as a
            beacon of simplicity. Our commitment is to make image editing
            accessible to everyone, regardless of their technical expertise.
          </p>
          <h3 className="h3-highlight">Our Services</h3>
          <p className="mb-4">
            <span className="fw-bold">Background remover, Unleashed:</span>{" "}
            Discover the freedom to create with our cutting-edge background
            removal services. Whether you're a professional photographer seeking
            to enhance your portfolio or a business owner looking to elevate
            your product images, we've got you covered.
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default About;
