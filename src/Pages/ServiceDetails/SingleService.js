import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import serviceData from '../../FakeData/data.json';

const SingleService = () => {
   const[allServices,setAllServices] = useState([]);

   const {serviceId} = useParams();
   //console.log(serviceData);
    
   useEffect(() => {
      setAllServices(serviceData);
   },[])
   const singleServiceData = allServices.filter(data => data.key === parseInt(serviceId))
   console.log(singleServiceData);
   return (
      <div style={{
               width:'600px',
               border:'1px solid red',
               margin:'19px auto 0 auto',
               padding:'7px'
      
       }}>

           <div>
                <img className='w-100' src={singleServiceData[0]?.pic}alt="image"/>
                 </div>
       <h3>{singleServiceData[0]?.name}</h3>
      <div>{singleServiceData[0]?.Description}</div>
              </div>
   );
};

export default SingleService;

