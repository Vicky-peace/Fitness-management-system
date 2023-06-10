import React from 'react'
import Image from '../images/values.jpg'
import SectionHead from './SectionHead'/*Reusable component*/
import {GiCutDiamond} from 'react-icons/gi'
import {values} from '../data'
import Card from '../UI/Card'
const Values = () => {
  return (
   <section className='values'>
    <div className='container values__container'>
        <div className='values__left'>
            <div className='values__image'><img src={Image} alt='Values-Image'/></div>
        </div>
        <div className='values__right'>
            <SectionHead icon={<GiCutDiamond/>} title="Values"/>
            <p>Transform your body and achieve fitness goals with our expert trainers and state-of-the-art equipment.</p>
 
            <div className='values__wrapper'>
              {
                values.map(({id,title, desc}) =>{
                    return <Card key={id} className="values__value">
                        <h4>{title}</h4>
                        <small>{desc}</small>
                        </Card>
                })
              }
            

            </div>
        </div>
    </div>
   </section>
  )
}

export default Values
