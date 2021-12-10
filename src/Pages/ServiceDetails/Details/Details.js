import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import allServiceData from '../../../FakeData/data.json';
const Details = () => {
   const [detailsData,setDetailsData] = useState([]);
   console.log(allServiceData);
   const params = useParams();
   console.log(params)
   
   useEffect(() => {
   
   })
   return (
      <div>
         
      </div>
   );
};

export default Details;