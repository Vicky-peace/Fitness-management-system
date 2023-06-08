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
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'
import './App.css'
function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
     <Routes>
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='gallery' element={<Gallery/>}/>
     <Route path='plans' element={<Plans/>}/>
     <Route path='trainers' element={<Trainers/>}/>
     <Route path = 'signin' element ={<SignIn/>}/>
     <Route path='signup' element = {<SignUp/>}/>
     <Route path='*' element={<NotFound/>}/>
     </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
