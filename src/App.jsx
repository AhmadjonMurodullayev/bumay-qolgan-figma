import React from 'react'
import Header from './layout/header/header'
import Navbar from './layout/header/navbar'
import Hero from './components/hero/hero'
import Card from './components/card/card'

function App() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <Hero/>
      <Card/>
      <Card/>
    </div>
  )
}

export default App