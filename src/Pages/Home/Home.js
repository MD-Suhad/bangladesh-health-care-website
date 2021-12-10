import React from 'react';
import Service from '../Service/Service';
import Works from '../Works/Works';
import CarouselData from './Corousel/CarouselData';

const Home = () => {
   return (
      <div id = "home">
         
         
     <CarouselData></CarouselData>

   
           <Service></Service>

           <Works></Works>
      </div>
   );
};

export default Home;