import React, { useState } from 'react'
import Navbar from './Componts/Navbar'
import Home from './Componts/Home'
import Skills from './Componts/Skills'
import Projects from './Componts/Projects'
import Contact from './Componts/Contact'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [darkMode, setDarkMode] = useState(true)

  const toggleTheme = () => {
    setDarkMode((prev) => !prev)
  }

  return (
    <div className={darkMode ? 'min-h-screen bg-slate-950 text-white' : 'min-h-screen bg-slate-100 text-slate-900'}>
      <Routes>
        <Route path='/' element={<><Navbar darkMode={darkMode} toggleTheme={toggleTheme} /><Home darkMode={darkMode} /></>} />
        <Route path='/skills' element={<><Navbar darkMode={darkMode} toggleTheme={toggleTheme} /><Skills darkMode={darkMode} /></>} />
        <Route path='/projects' element={<><Navbar darkMode={darkMode} toggleTheme={toggleTheme} /><Projects darkMode={darkMode} /></>} />
        <Route path='/contact' element={<><Navbar darkMode={darkMode} toggleTheme={toggleTheme} /><Contact darkMode={darkMode} /></>} />
      </Routes>
    </div>
  )
}

export default App
