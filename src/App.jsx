import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Container from './components/Container/Container.jsx'
import FoodBanner from './components/FoodBanner/FoodBanner.jsx'
import Card from './components/Card/Card.jsx'
import TopProducts from './components/TopProducts/TopProducts.jsx'
import Testimonals from './components/Testimonals/Testimonals.jsx'
import Cheefs from './components/Cheefs/Cheefs.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
    <Navbar />
    <Container /> 
    <FoodBanner />
    <Card />
    <TopProducts />
    <Testimonals />
    <Cheefs />
    <Footer />
    </>
  )
}

export default App