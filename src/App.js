import React from 'react'
import './index.css'
import { Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'

function App() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
    </>
  )
}

export default App
