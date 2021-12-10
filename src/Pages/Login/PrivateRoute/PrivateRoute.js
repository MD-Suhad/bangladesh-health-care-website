import userEvent from '@testing-library/user-event';
import React from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children,...rest}) => {
   return (
      <Route
      {...rest}
      render ={
         ({location}) => userEvent.email? children: <Redirect 
         to ={{
            pathname: '/login',
            state:{from:location}
      
         }}
         ></Redirect>
      }
      >

      </Route>
   );
};

export default PrivateRoute;