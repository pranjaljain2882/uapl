import React from 'react';
import './Home.css';
import ServiceBooking from '../../Components/ServiceBooking/ServiceBooking';

function Home() {

    return (
      <div className='home'>
        <ServiceBooking/>
      </div>
    );
  }
  
  export default Home;