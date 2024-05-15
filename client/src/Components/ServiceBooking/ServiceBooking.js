import React from 'react';
import './ServiceBooking.css';
import ServiceCard from '../ServiceCard/ServiceCard';
import Uapl from '../../Assets/Images/Uapl.png'
import ArtLogistics from '../../Assets/Images/ArtLogistics.png'
import ArtSafe from '../../Assets/Images/ArtSafe.png'
import CustomisedCrate from '../../Assets/Images/CustomisedCrate.png'
import Factory from '../../Assets/Images/Factory.png'
import PackersAndMovers from '../../Assets/Images/PackersAndMovers.png'
import SameDay from '../../Assets/Images/SameDay.png'
import Warehousing from '../../Assets/Images/Warehousing.png'

function ServiceBooking() {

    return (
      <div className='servicebooking'>
        <div className='title'>BOOK YOUR SERVICE NOW</div>
        <div className='service-card'>
          <div className='service-card1'> 
            <ServiceCard
              serviceImage={ArtLogistics}
              subscriptImage={Uapl}
              heading="Art Logistics"
            /> 
          </div>
          <div className='service-card1'> 
            <ServiceCard
              serviceImage={CustomisedCrate}
              subscriptImage={Factory}
              heading="Customized crate"
            /> 
          </div>
          <div className='service-card1'> 
            <ServiceCard
              serviceImage={PackersAndMovers}
              subscriptImage={SameDay}
              heading="Packers and movers"
            /> 
          </div>
          <div className='service-card1'> 
            <ServiceCard
              serviceImage={Warehousing}
              subscriptImage={ArtSafe}
              heading="Warehousing"
            /> 
          </div>
        </div>
      </div>
    );
}
  
export default ServiceBooking;