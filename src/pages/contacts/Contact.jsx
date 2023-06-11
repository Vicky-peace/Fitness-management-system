import React from 'react'
import Header from '../../components/Header'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import HeaderImage from '../../images/header_bg_2.jpg'


import './contacts.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure necessitatibus facilis expedita laboriosam inventore fugit.
    </Header>
    <section className="contact">
      <div className='container contact__container'>
        <div className='contact__wrapper'>
          <a href="kipkorirpeace@gmail.com" target='_blank' rel='norefferer noopener'><MdEmail/></a>
          <a href="https://m.me/" target='_blank' rel='norefferer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+254 714933162" target='_blank' rel='norefferer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact
