import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './WorksDetails.css';

const WorksDetails = ({data}) => {
   const{title,details,img} = data;
   return (
      <div>

         <Col>
         <Card className="workDetails-card">
         <Card.Img variant ="top" src ={img} />
         <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
         </Card.Body>
         </Card>
       </Col>
      </div>
   );
};

export default WorksDetails;