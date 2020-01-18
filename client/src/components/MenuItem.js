import React from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal'
import Button from 'react-bootstrap/Button'
import DarkWood from '../images/dark-wood.png'



const MenuItem = (props) => {
    const menuItem = props.menuItemProp
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div>
            <VerticallyCenteredModal
                menuItem={menuItem}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            <Button style={{fontFamily:'serif', backgroundImage: `url(${DarkWood}` }} bg="dark" variant="dark" size="sm" onClick={() => setModalShow(true)} block>
                {menuItem.name}
            </Button>
        </div >
    )
}
export default MenuItem