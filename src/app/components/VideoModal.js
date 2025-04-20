"use client";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTubeVideo from "./YouTubeVideo";
import { RxCross2 } from "react-icons/rx";

export default function VideoModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className=" rounded-0"
    >
      <Modal.Body className="p-0 rounded-0 position-relative">
        <Button
          variant="dark"
          className=" position-absolute pt-0 px-2 rounded-circle"
          onClick={props.onHide}
          style={{ top: "-2rem", right: "-2rem" }}
        >
          <RxCross2 />
        </Button>
        <YouTubeVideo url="https://www.youtube.com/watch?v=aqMW-oQG9FM" />
      </Modal.Body>
    </Modal>
  );
}
