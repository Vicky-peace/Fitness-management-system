import React from 'react'
import Header from '../../components/Header'
import Card from '../../UI/Card'
import HeaderImage from '../../images/header_bg_5.jpg'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'


// Images imports
import Trainer1 from '../../images/trainer1.jpg';
import Trainer2 from '../../images/trainer2.jpg';
import Trainer3 from '../../images/trainer3.jpg';
import Trainer4 from '../../images/trainer4.jpg';
import Trainer5 from '../../images/trainer5.jpg';
import Trainer6 from '../../images/trainer6.jpg';

import './trainers.css'

// Trainers Data

const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'John Maina',
    job: 'Aerobic Trainer',
    socials: [ <BsInstagram/>, <AiOutlineTwitter/>, <FaFacebookF/>, <FaLinkedinIn/>]
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Daniel Wanjiku',
    job: 'Speed Trainer',
    socials: [<BsInstagram/>,  <AiOutlineTwitter/>,  <FaFacebookF/>, <FaLinkedinIn/>]
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Edem Muthoni',
    job: 'Flexibility Trainer',
    socials: [<BsInstagram/>,  <AiOutlineTwitter/>,  <FaFacebookF/>, <FaLinkedinIn/>]
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Shatta Kamau',
    job: 'Body Composition Trainer',
    socials: [<BsInstagram/>,  <AiOutlineTwitter/>,  <FaFacebookF/>, <FaLinkedinIn/>]
  },
  {
    id: 5,
    image: Trainer5,
    name: 'Diana Ayodi',
    job: 'Circuit Trainer',
    socials: [<BsInstagram/>,  <AiOutlineTwitter/>,  <FaFacebookF/>, <FaLinkedinIn/>]
  },
  {
    id: 6,
    image: Trainer6,
    name: 'Wayne ',
    job: 'Physical Intelligence Trainer',
    socials: [<BsInstagram/>,  <AiOutlineTwitter/>,  <FaFacebookF/>, <FaLinkedinIn/>]
  }
];


const Trainers = () => {
  return (
    <>
          <Header image={HeaderImage} title='Our Trainers'>
          Our team of dedicated trainers is passionate about helping you achieve your fitness goals. Whether you're looking to improve your aerobic endurance, increase your speed and agility, enhance your flexibility, optimize your body composition, or engage in circuit training, we have the expertise to guide you every step of the way.
            </Header>
    <div className="trainers__container">
      {trainers.map((trainer) => (
        <Trainer
          key={trainer.id}
          image={trainer.image}
          name={trainer.name}
          job={trainer.job}
          socials={trainer.socials}
        />
      ))}
    </div>
    </>
  );
};

const Trainer = ({ image, name, job, socials }) => {
  return (
    <Card className='card trainer'>
      <div className='trainer__img'>
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{job}</p>
      <div className='trainer__socials'>
        {socials.map((link, index) => (
          <a
            key={index}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className="trainer__social-link"
          >
            {link}
          </a>
        ))}
      </div>
    </Card>
  );
};

export default Trainers;
