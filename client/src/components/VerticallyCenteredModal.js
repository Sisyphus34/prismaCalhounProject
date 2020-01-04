import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const VerticallyCenteredModal = (props) => {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.menuItem.catagory}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{props.menuItem.name}</h5>
        <p>
          {props.menuItem.description}
          <p style={{ textAlign: "right" }} >{props.menuItem.formattedPrice}</p>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default VerticallyCenteredModal