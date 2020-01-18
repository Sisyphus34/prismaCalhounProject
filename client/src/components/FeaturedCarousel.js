import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useGetMenuItemsQuery } from '../generated/apollo-components'


const FeaturedCarousel = (props) => {

  const { data, loading, error } = useGetMenuItemsQuery()

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);


  if (loading) return ''
  if (error) return ''

  // console.log(props.MenuItems);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <React.Fragment>
      <div style={{ textAlign: 'center', margin:'10px' }}>
        <Carousel style={{ width: '75rem', display: 'inline-block', margin:'auto' }} activeIndex={index} direction={direction} onSelect={handleSelect} >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://source.unsplash.com/1024x576/?${data.menuItems[0].name}`}
              alt="Menu Item"
              margin="auto"

            />
            <Carousel.Caption>
              <h3>{data.menuItems[0].name}</h3>
              <p>{data.menuItems[0].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://source.unsplash.com/1024x576/?${data.menuItems[1].name}`}
              alt="Menu Item"
              margin="auto"
            />

            <Carousel.Caption>
              <h3>{data.menuItems[1].name}</h3>
              <p>{data.menuItems[1].description}</p>

            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`https://source.unsplash.com/1024x576/?${data.menuItems[2].name}`}
              alt="Menu Item"
              margin="auto"

            />

            <Carousel.Caption>
              <h3>{data.menuItems[2].name}</h3>
              <p>{data.menuItems[2].description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </React.Fragment>
  );
}

export default FeaturedCarousel