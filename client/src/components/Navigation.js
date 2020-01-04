import React from 'react'
import Nav from 'react-bootstrap/Nav'



const Navigation = (props) => {
    return(
      
        <Nav className="justify-content-end" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">HOME</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">MENU</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">ABOUT</Nav.Link>
          </Nav.Item>
        </Nav>
    )
}

export default Navigation
