import React from 'react';
import Card from '../../UI/Card';
import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import { BsInstagram } from 'react-icons/bs'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

// Import other trainers' images
import Trainer1 from '../../images/trainer4.jpg';
import Trainer2 from '../../images/Trainer 2.jpg';
import Trainer3 from '../../images/Trainer 3.jpg';
import Trainer4 from '../../images/Trainer 4.jpg';
import Trainer5 from '../../images/Trainer 5.jpg';
import Trainer6 from '../../images/Trainer 6.jpg';

import './trainers.css';

const trainers = [
  {
    id: 1,
    image: Trainer1,
    name: 'John Maina',
    job: 'Aerobic Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/> , <FaLinkedinIn/>]
  },
  {
    id: 2,
    image: Trainer2,
    name: 'Daniel Wanjiku',
    job: 'Speed Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/>, <FaLinkedinIn/>]
  },
  {
    id: 3,
    image: Trainer3,
    name: 'Edem Muthoni',
    job: 'Flexibility Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/>,  <FaLinkedinIn/>]
  },
  {
    id: 4,
    image: Trainer4,
    name: 'Shatta Kamau',
    job: 'Body Composition Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/>, <FaLinkedinIn/>]
  },
  {
    id: 5,
    image: Trainer5,
    name: 'Diana Ayodi',
    job: 'Circuit Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/>,  <FaLinkedinIn/>]
  },
  {
    id: 6,
    image: Trainer6,
    name: 'Wayne Chepkorir',
    job: 'Physical Intelligence Trainer',
    socials: [< BsInstagram/>, <AiOutlineTwitter/>, <FaLinkedinIn/>]
  }


];
const Trainers = () => {
  return (
    <> 
    <Header title="Our Gallery" image={HeaderImage}>
  Discover the Beauty of Our Captivating Gallery Collection
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
  </div></>
   
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
