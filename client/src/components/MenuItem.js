import React from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal'
import Button from 'react-bootstrap/Button'


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
            <Button variant="outline-info" size="sm" onClick={() => setModalShow(true)} block>
                {menuItem.name}
            </Button>
        </div >
    )
}
export default MenuItem