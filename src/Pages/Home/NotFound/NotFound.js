import React from 'react';
import ImageFound from '../../../Images/download.jpg';
import './NotFound.css'

const NotFound = () => {
   return (
      <div className="w-100 Not-found">
       <img src={ImageFound} alt="" />  
      </div>
   );
};

export default NotFound;