import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServiceDetails.css';

const ServiceDetails = ({data}) => {
   const {key,pic,Description,name} = data;
   return (
      <div>
         
           <Col>
           <Card className="serviceDetails-card">
            <Card.Img variant ="top" src ={pic} />
            <Card.Body>
            <Card.Title>{name}</Card.Title> 
            <Card.Text>{Description}</Card.Text>
           <Link className='d-inline-block mx-auto w-100 border mt-3' to={`/serviceDetails/${key}`}>
           <Button className='w-100'>View Details </Button>
           </Link>

          </Card.Body>
           </Card>
           </Col>









      
      </div>

   );
};

export default ServiceDetails;