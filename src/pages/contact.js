import Footer from "../components/footer";
import Header from "../components/header";
import { Container } from "react-bootstrap";
import Advertisement from "../components/advertisement";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ContactPic from "./../asserts/contact-02.png";
import ContactPic2 from "./../asserts/contact.svg";
import "./../App.css";

function Contact() {
  return (
    <>
      <Header />
      <Container>
        <div className="p-4" style={{ marginTop: "140px" }}>
          <Advertisement />
          <hr />
          <Image
            style={{ width: "100%", height: "300px" }}
            className="mb-4"
            alt="contact-us-img"
            fluid
            src={ContactPic2}
          />
          <h3 className="h3-highlight">Contact Us</h3>
          <p>
            Whether you have questions, feedback, or specific requests, our
            dedicated team is committed to offering prompt and attentive
            assistance. We take pride in our commitment to responsiveness,
            aiming to respond to our clients within{" "}
            <span className="fw-bold"> 24 hours</span> . Your satisfaction is at
            the forefront of our service, and we strive to exceed expectations
            with every interaction.
          </p>
          <p className="mb-4">
            Please feel free to utilize any of the contact details provided
            below to get in touch with us. Your communication is important to
            us, and we look forward to addressing your needs with the utmost
            care and efficiency
          </p>
          <Row>
            <Col sm={12} md={12} lg={7} xl={7}>
              <Image alt="contact-us-img" fluid src={ContactPic} />
            </Col>
            <Col sm={12} md={12} lg={5} className="mt-2">
              <h4 className="h3-highlight">Contact Details</h4>
              <ul className="lh-lg">
                <li>Email address: molatipaballo@gmail.com</li>
                <li>Phone Number: +266 59911982</li>
                <li>Physical address: Lesotho,Maseru</li>
                <li>
                  Linkedin Connect:
                  <a href="https://ls.linkedin.com/in/paballo-molati-075313220">
                    {" "}
                    Paballo Molati
                  </a>{" "}
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Contact;
