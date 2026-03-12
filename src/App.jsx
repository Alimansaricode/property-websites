import React from 'react'
import Nav from './pages/Nav.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Rent from './pages/Rent'
import About from './pages/About'


function App() {
  return (
    <div className='min-h-screen bg-white '>
      <BrowserRouter>
    <Nav/>
    <Routes>
     
      <Route path='/' element={<Home/>}/>
      <Route path='/buy' element={<Buy/>}/>
      <Route path='/rent' element={<Rent/>}/>
      <Route path='/about' element={<About/>}/>
    
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
