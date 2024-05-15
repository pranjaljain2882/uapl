import React from 'react';
import './Home.css';
import Navbar from "../../Components/NavBar/navbar"
import Whyus from "../../Components/whyUs/whyUs"
import Taop from "../../Components/theArtOfProtection/theArtOfProtection"
import ServiceBooking from '../../Components/ServiceBooking/ServiceBooking';

function Home() {

    return (
      <div className='home'>
        <Navbar/>
        <ServiceBooking/>
        <Taop/>
        <Whyus/>
      </div>
    );
  }
  
  export default Home;