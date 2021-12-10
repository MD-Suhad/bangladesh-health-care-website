import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import serviceData from '../../FakeData/data.json';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const Service = () => {
  const[personType,setPersonType] = useState([]);
  //console.log(serviceData);
   
  useEffect(() => {
     setPersonType(serviceData);
  },[])

   return (
      <div className="bg-secondary p-3 mt-5 rounded" id ="service">
          <h2 className="text-center text-header fw-bold mb-3">Our Services</h2>

      <Row xs={1} md={3} className="g-3">
         {
            personType.map(data => <ServiceDetails
            key ={data.key}
            data={data}
            ></ServiceDetails>)
         }
         </Row>
      </div>
   );
};

export default Service;