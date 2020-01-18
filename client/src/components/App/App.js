import React from 'react'
import MenuItems from '../MenuItems'
import Navigation from '../Navigation'
import FeaturedCarousel from '../FeaturedCarousel'
import BeigePaper from '../../images/beige-paper.png'


const App = () => {

  return (
    <div style={{
      backgroundColor: '#fffff0',
      backgroundImage: `url(${BeigePaper})`
    }}>
      {/* <Header /> */}
      <Navigation />
      <FeaturedCarousel />
      <MenuItems />
    </div>
  )
}

export default App