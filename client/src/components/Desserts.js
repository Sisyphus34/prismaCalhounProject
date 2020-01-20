import React from 'react'
import { useGetDessertsQuery} from '../generated/apollo-components'
import MenuItem from './MenuItem'
import Card from 'react-bootstrap/Card'



const Desserts = () => {
    const { data, loading, error } = useGetDessertsQuery()

    if (loading) return "Loading..."
    if (error) return "Error..."

    console.log(data)

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
export default Desserts