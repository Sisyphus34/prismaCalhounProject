import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



const Navigation = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#home">Calhoun Corners</Navbar.Brand>
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/menu">MENU</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  )
}

export default Navigation
