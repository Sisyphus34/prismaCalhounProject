import React from 'react'
import Header from '../Header'
import MenuItems from '../MenuItems'
import Navigation from '../Navigation'
import FeaturedItems from '../FeaturedItems'


const App = () => {

  return (
    <div>
      {/* <Header /> */}
      <Navigation />
      <FeaturedItems />
      <MenuItems />
    </div>
  )
}

export default App