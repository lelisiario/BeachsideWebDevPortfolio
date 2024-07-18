// src/components/PortfolioCarousel.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import './carouselStyles.css';
import Catzzeria from '../assets/images/Catzzeria.png';
import ecoffee from '../assets/images/ecoffee.png';
import readingroundtable from '../assets/images/readingroundtable.png';

const PortfolioCarousel = () => {
  return (
    <Carousel showIndicators={true} infiniteLoop={true}>
      <div>
        <img src={Catzzeria} alt="Catzzeria" />
      </div>
      <div>
        <img src={readingroundtable} alt="Reading roundtable" />
      </div>
      <div>
        <img src={ecoffee} alt="E-Coffee" />
      </div>
      {/* Add more divs with images as needed */}
    </Carousel>
  );
};

export default PortfolioCarousel;
