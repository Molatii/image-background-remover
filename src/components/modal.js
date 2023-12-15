import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Advertisement from "./advertisement";

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
        <Advertisement />
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
