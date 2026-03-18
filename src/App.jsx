import React from 'react'
import Navbar from './Componts/Navbar'
import Home from './Componts/Home'
import Products from './Componts/Products'
import Services from './Componts/Services'
import Contact from './Componts/Contact'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<><Navbar /><Home /></>} />
        <Route path='/products' element={<><Navbar /><Products /></>} />
        <Route path='/services' element={<><Navbar /><Services /></>} />
        <Route path='/contact' element={<><Navbar /><Contact /></>} />
      </Routes>
    </>
  )
}

export default App
