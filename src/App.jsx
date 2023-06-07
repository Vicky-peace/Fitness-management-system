import { useState } from 'react'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contacts/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notfound/NotFound'
import Navbar from './components/Navbar'
import './App.css'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Home/>
    <Contact/>
    <About/>
    <Gallery/>
    <Plans/>
    <Trainers/>
    <NotFound/>
    </BrowserRouter>
    
    </>
  )
}

export default App
