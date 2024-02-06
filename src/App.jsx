import React from 'react'
import Header from './Components/Header'
import Navbar from './Components/Navbar'
import Slider from './Components/Slider'
import Category from './Components/Category'

const App = () => {
  return (
    <div className="container mx-auto my-1">
      <Header />
      <Navbar />
      <Slider />
      <Category />
    </div>
  )
}

export default App
