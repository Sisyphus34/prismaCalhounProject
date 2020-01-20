import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Appetizers from './Appetizers'
import Entrees from './Entrees'
import Desserts from './Desserts'


const PageTabs = () => (
    <div style={{ textAlign: 'center', fontFamily: 'serif' }}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab  eventKey="appetizers" title="Appetizers">
                <Appetizers />
            </Tab>
            <Tab eventKey="entrees" title="Entrees">
                <Entrees />
        </Tab>
            <Tab eventKey="desserts" title="Desserts">
                <Desserts />
        </Tab>
        </Tabs>
    </div>

)

export default PageTabs