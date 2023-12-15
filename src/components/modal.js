import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import emoji from "./../asserts/emoji.png"

export const EraserModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="justify-content-center mx-auto d-block"
        >
          <p className="text-center fw-bold">{props.title}</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image
          className="mx-auto d-block justify-content-center"
          alt="about-us-img"
          src={emoji}
          fluid
          style={{ width: "35%", height: "150px" }}
        />
      </Modal.Body>
      <Modal.Footer className="justify-content-center mx-auto d-block">
        <Button
          style={{ background: "rgb(140, 77, 249)", width: "240px" }}
          size="lg"
          onClick={props.onHide}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
