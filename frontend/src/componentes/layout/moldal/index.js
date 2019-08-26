import React, { Component } from "react";
import "./index.css";
import { Button, Form, Modal } from "react-bootstrap";

class ModalCad extends Component {

  state = {
    show: false
  }

  render() {

    const [show, setShow] = this.state;

    const handleClose = () => setShow(false);

    return (
      <Form>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </Form>
    );
  };
}

export default ModalCad;
