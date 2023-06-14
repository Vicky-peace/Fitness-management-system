import React from 'react'
import {Link} from 'react-router-dom' 
import Image from '../images/main-head.jpg'


const MainHeader = () => {
  return (
   <header className='main__header'>
    <div className='container main__header-container'>
      <div className="main__header-left">
        <h4>#100days Of Workout</h4>
        <h1>Join The Legends of Fitness In The World</h1>
        <p>Embark on a transformative journey with 100 Days of Workout. Join the esteemed legends of fitness from around the world and unlock your full potential for a healthier, stronger, and more vibrant life.</p>
        <Link to= '/plans' className='btn lg'>Get Started</Link>
      </div>
      <div className="main__header-right">
        <div className="main__header-circle"></div>
        <div className="main__header-image">
        <img
    src={Image}
    alt="Main Header Image"
    style={{ width: '15rem', height: '15rem', borderRadius: '50%' }}
  />
  
        </div>
      </div>
    </div>
   </header>
  )
}

export default MainHeader

