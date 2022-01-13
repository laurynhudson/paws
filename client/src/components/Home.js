import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { Instagram, Facebook } from "react-bootstrap-icons";
import "../styling/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        <span className="home-link">Home</span>
        <span className="services-link">Services</span>
        <span className="pricing-link">Pricing</span>
        <Instagram className="ig" size={20}></Instagram>
        <Facebook className="fb" size={20}></Facebook>
        <span className="contact">
          <Button variant="outlined" color="info">
            Contact us
          </Button>
        </span>
      </div>
      <div>
        <img src="../paws.png" className="logo" alt="paws-logo"></img>
      </div>
      <div>
        <img src="../pup.png" className="pup" alt="dog" />
      </div>
      <div className="appointment-button">
        {/* want to edit to be a pink, more aestethically pleasing */}
        <Link to="/appointment">
          <Button variant="contained" color="info">
            Schedule an appointment
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
