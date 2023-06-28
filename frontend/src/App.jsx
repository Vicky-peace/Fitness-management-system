import { useState } from 'react'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'
/*Pages*/
import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contacts/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import NotFound from './pages/notfound/NotFound'
import SignIn from './pages/signin/SignIn'
import SignUp from './pages/signup/SignUp'

/*Components*/
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
// Context
import { useContext } from 'react';
import {Context} from './context/Context'
import './App.css'



function App() {

  const {user} = useContext(Context)
  return (
    <>
    <BrowserRouter>
    <ScrollToTop />
    <Navbar/>
    
     <Routes>
     <Route index element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contacts' element={<Contact/>}/>
     <Route path='gallery' element={<Gallery/>}/>
     <Route path='plans' element={user ?<Plans/> : <Home/>}/>
     <Route path='trainers' element={<Trainers/>}/>
     <Route path = 'signin' element ={<SignIn/>}/>
     <Route path='signup' element = {<SignUp/>}/>
     <Route path='*' element={<NotFound/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    
    </>
  )
}

export default App
