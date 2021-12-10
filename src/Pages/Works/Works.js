import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import workJsonData from '../../FakeData/worksData.json';
import WorksDetails from './WorksDetails';

const Works = () => {
   const [workData,setWorkData] = useState([]);
  // console.log(workJsonData);
   useEffect(() =>{
      setWorkData(workJsonData);
   },[])
   return (
      <div className="bg-secondary p-3 mt-5 rounded" id="works">
         <h2 className="text-center text-header fw-bold mb-3">Recent Creative</h2>
         <Row xs={1} md={1} className="g-4">
        {
           workData.map(dataS => <WorksDetails
           id={dataS.id}
           data={dataS}
           ></WorksDetails>)
        }
        </Row>
      </div>
   );
};

export default Works;