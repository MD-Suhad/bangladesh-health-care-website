import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
// import { RiCopyrightLine } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-dark p-5 mt-5 text-light">
      <Container className="d-flex justify-content-between">
        <div className="icon">
          <h5 className="text-info fw-bold ps-2">Health Care</h5>
          <br />
          <p>A Healthcare Marketing Agency that Wins Patients, Grows Revenues and Enhances Your Reputation</p>
        </div>
        <div>
            <h2>Company</h2>
            <hr />
            <ul className="me-5">
                <ol>About Us</ol>
                <ol>History</ol>
                <ol>Team</ol>
                <ol>Careerrs</ol>
            </ul>
        </div>
        <div>
            <h2>Support</h2>
            <hr />
            <ul className="me-5">
                <ol>
                    Contact Us
                </ol>
                <ol>Help Center</ol>
                <ol>FAQ</ol>
                <ol>Community</ol>
                <ol>Forum</ol>
            </ul>
        </div>
        <hr />
        
      </Container>
      <hr />
      <p><FontAwesomeIcon icon={faCopyright} /> Copyright</p>
    </div>
  );
};

export default Footer;
