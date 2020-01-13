import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { useGetMenuItemsQuery } from '../generated/apollo-components'


const FeaturedItems = (props) => {

  const { data, loading, error } = useGetMenuItemsQuery()

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(null);


  if (loading) return 'loading'
  if (error) return 'error'

  // console.log(props.MenuItems);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect} >
      <Carousel.Item>
        <img
          src={`https://source.unsplash.com/1400x900/?${data.menuItems[0].name}`}
          alt="Menu Item"
        />
        <Carousel.Caption>
          <h3>{data.menuItems[0].name}</h3>
          <p>{data.menuItems[0].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={`https://source.unsplash.com/1400x900/?${data.menuItems[1].name}`}
          alt="Menu Item"
        />

        <Carousel.Caption>
          <h3>{data.menuItems[1].name}</h3>
          <p>{data.menuItems[1].description}</p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={`https://source.unsplash.com/1400x900/?${data.menuItems[2].name}`}
          alt="Menu Item"
        />

        <Carousel.Caption>
          <h3>{data.menuItems[2].name}</h3>
          <p>{data.menuItems[2].description}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default FeaturedItems