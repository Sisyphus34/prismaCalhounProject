import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import DarkWood from '../images/dark-wood.png'


const Navigation = (props) => {
  return (
      <Navbar bg="dark" expand="xl" variant="dark" style={{backgroundImage: `url(${DarkWood}` }}>
        <Navbar.Brand href="/home" style={{fontFamily:'cursive'}}>CALHOUN CORNERS</Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
          {/* <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item> */}
          <Nav.Item>
            <Nav.Link href="/menu" style={{fontFamily:'serif'}}>menu</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about" style={{fontFamily:'serif'}}>about</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
  )
}

export default Navigation
