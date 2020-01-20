import React from 'react'
import CenteredModal from './CenteredModal'
import Button from 'react-bootstrap/Button'
import DarkWood from '../images/dark-wood.png'



const MenuItem = (props) => {
    const menuItem = props.menuItemProp
    const [modalShow, setModalShow] = React.useState(false);

    return (
        
        <div>
            <CenteredModal
                menuItem={menuItem}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Button style={{
                borderTopRightRadius:0,
                borderTopLeftRadius: 0,
                fontFamily: 'serif', backgroundImage: `url(${DarkWood}`
            }} bg="dark" variant="dark" size="sm" onClick={() => setModalShow(true)} block>
                {menuItem.name}
            </Button>
        </div >
    )
}
export default MenuItem

