import React from 'react'
import Nav from './pages/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Rent from './pages/Rent'
import About from './pages/About'
import Login from './pages/Login'


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
        <Route path='/Login' element={<Login/>}/>
    
    </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App
