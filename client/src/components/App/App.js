import React from 'react'
// import MenuItems from '../MenuItems'
import Navigation from '../Navigation'
import FeaturedCarousel from '../FeaturedCarousel'
import BeigePaper from '../../images/beige-paper.png'
import PageTabs from '../PageTabs'

const App = () => {

  return (
    <div style={{
      backgroundColor: '#fffff0',
      backgroundImage: `url(${BeigePaper})`
    }}>
     
      <Navigation />
      <FeaturedCarousel />
      <PageTabs />
      {/* <MenuItems /> */}
    </div>
  )
}

export default App