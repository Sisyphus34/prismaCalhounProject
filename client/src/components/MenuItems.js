import React from 'react'
import { useGetMenuItemsQuery } from '../generated/apollo-components'
import MenuItem from './MenuItem'
import Card from 'react-bootstrap/Card'



const MenuItems = () => {
    const { data, loading, error } = useGetMenuItemsQuery()

    if (loading) return "Loading..."
    if (error) return "Error..."

    return (
        <React.Fragment>
        <div style={{ textAlign: 'center' }}>
            {
                data.menuItems.map((menuItem, index) => (
                    <Card key={menuItem.id} style={{ width: '20rem', display: 'inline-block', margin: '20px' }}>
                        {/* <img src={`https://source.unsplash.com/300x120/?${menuItem.catagory},${menuItem.name}&random=${Math.random()}`} alt="Menu Item" /> */}
                        <Card.Img variant="top" src={`https://source.unsplash.com/300x120/?${menuItem.catagory},${menuItem.name}&random=${Math.random()}`} alt="Menu Item" />
                        <MenuItem menuItemProp={menuItem} key={menuItem.id} id={menuItem.id} index={index} />
                    </Card>
                ))
            }
        </div>
        </React.Fragment>
    )
}
export default MenuItems