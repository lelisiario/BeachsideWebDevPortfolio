// src/components/PortfolioCarousel.jsx

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the styles
import './carouselStyles.css';

const PortfolioCarousel = () => {
  return (
    <Carousel showIndicators={true} infiniteLoop={true}>
      <div>
        <img src="src\assets\Catzzeria.PNG" alt="Catzzeria" />
      </div>
      <div>
        <img src="src\assets\Reading Roundtable.PNG" alt="Reading-Roundtable" />
      </div>
      <div>
        <img src="src\assets\e-coffee.PNG" alt="E-Coffee" />
      </div>
      {/* Add more divs with images as needed */}
    </Carousel>
  );
};

export default PortfolioCarousel;
