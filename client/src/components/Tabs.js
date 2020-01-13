import React from 'react'
import Tab from 'react-bootstrap/Tab'



const Tabs = () => (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
            This is tab 1
        </Tab>
        <Tab eventKey="profile" title="Profile">
            This is tab 2
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
            This is tab 3 
        </Tab>
    </Tabs>
)

export default Tabs