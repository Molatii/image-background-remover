import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import "./../App.css";

import Carousel from "react-bootstrap/Carousel";
import FirstCarouselImage from "./../asserts/hero_img.jpg";
import SecondCarouselImage2 from "./../asserts/hero_img_2.png";

function Hero() {
 
  return (
    <Container>
      <Row gap={2}>
        <Col
          sm={12}
          md={12}
          lg={7}
          xl={7}
          className="d-flex justify-content-center justify-content-lg-start "
        >
          <div className="text-left mb-4">
            <h3 className="h3-highlight">Simplicity Redefined</h3>
            <h1 className="mt-4 lh-base fw-bold">
              Erase Image Backgrounds and Unleash Creative Freedom
            </h1>
            <p className="mt-4 lh-1.6 fw-light">
              Unlock the power of our system to effortlessly remove backgrounds
              from images of various formats.
            </p>
            <Button
              style={{ background: "rgb(140, 77, 249)" }}
              size="lg"
              className="mt-4 mb-4"
              href="/remove-background"
            >
              Get Started
              <FontAwesomeIcon icon={faRocket} style={{ marginLeft: "10px" }} />
            </Button>
          </div>
        </Col>
        <Col sm={12} md={12} lg={5}>
          <Carousel fade controls={false} interval={3000}>
            <Carousel.Item>
              <img
                src={FirstCarouselImage}
                alt="original img"
                className="d-block w-100 rounded"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={SecondCarouselImage2}
                alt="edited img"
                className="d-block w-100 rounded"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
