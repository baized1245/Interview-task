import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Category from './Components/Category'
import About from './Components/About'
import Services from './Components/Services'

const App = () => {
  return (
    <div className="container mx-auto my-1">
      <Header />
      <Navbar />
      <Slider />
      <Category />
      <About />
      <Services />
    </div>
  )
}

export default App
