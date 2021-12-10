import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
   const  {user,logOut} = useAuth();
   return (
      <>
   <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
    <Container>
    <Navbar.Brand href="#home">Health Care</Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
     <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as={HashLink} to="/home#works">Activity</Nav.Link>
       {user.email?
       <Button onClick ={logOut} 
       variant="outline-danger">logout</Button>:
        <Nav.Link href="#login">Login</Nav.Link>
      }
      {
         (!user?.displayName && !user?.email) && <Link to ="/registration">Registration</Link>
      }
      <Navbar.Text>
         Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    </Container>
  </Navbar>
    
      </>
   );
};

export default Header;