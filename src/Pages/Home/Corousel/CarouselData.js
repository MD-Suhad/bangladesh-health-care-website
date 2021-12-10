import React from 'react';
import { Carousel } from 'react-bootstrap';
import images1 from '../../../Images/Healthcare_Success.jpg';
import images2 from '../../../Images/Healthcare-Content-Marketing-How-to-Do-it-Like-a-Pro.jpg';
import './carouse.css';

const CarouselData = () => {
   return (
      <div>
   <Carousel> 
  <Carousel.Item>
    <img
      className="d-block w-100 carousel-img"

      src={images1}
      alt="First slide"
    />
    <Carousel.Caption className="text-start">
      <h3 className="text-light">Build Your Brand With Live and Virtual Healthcare Events</h3>
      <p>Live events can be a core part of the marketing strategy for healthcare systems, hospitals and multilocation practices. But, as we all know, the last few years have challenged how we market and serve our clients — especially when it comes to live events.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={images2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>How to Build a Healthcare Content Marketing Strategy: A 10-Step Guide</h3>
      <p>When done correctly, healthcare content can build trust and turn people into lifelong supporters of your brand. At the same time, creating superior health or wellness content can be challenging. </p>
    </Carousel.Caption>
  </Carousel.Item>
  
  </Carousel>
      </div>
   );
};

export default CarouselData;