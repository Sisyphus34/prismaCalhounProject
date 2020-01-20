import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DarkWood from '../images/dark-wood.png'
import BeigePaper from '../images/beige-paper.png'


const CenteredModal = (props) => {

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{fontFamily:'serif', backgroundImage: `url(${DarkWood}` }} closeButton>
        <Modal.Title id="contained-modal-title-vcenter" style={{fontFamily:'cursive'}} >
          {props.menuItem.catagory}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{
      backgroundColor: '#fffff0',
      backgroundImage: `url(${BeigePaper})`
    }}>
        <h5 style={{fontFamily:'serif'}}>{props.menuItem.name}</h5>
        <p style={{fontFamily:'serif'}}> 
          {props.menuItem.description}
          <p style={{ textAlign: "right", fontFamily:'cursive'}} >{props.menuItem.formattedPrice}</p>
        </p>
      </Modal.Body>
      <Modal.Footer style={{fontFamily:'serif', backgroundImage: `url(${DarkWood}` }}>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CenteredModal