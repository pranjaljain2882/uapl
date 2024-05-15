import React from 'react';
import Rectangle from '../../Assets/Images/Rectangle.png'
import './ServiceCard.css';

function ServiceCard({ serviceImage, subscriptImage, heading }) {

    return (
      <div className='servicecard'>
        <div className='overlap'>
          <img src={serviceImage} alt="service" className='under'/>
          <img src={Rectangle} alt="subscriptImage" className='rectangle' />
          <img src={subscriptImage} alt="subscriptImage" className='over' />
        </div>
        <div className='btn'>Book Now ></div>
        <div className='heading'>{heading}</div>
      </div>
    );
  }
  
  export default ServiceCard;