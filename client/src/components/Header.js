import React from "react";
import { Button } from "@mui/material";
import { Instagram, Facebook } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../styling/Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <span className="home-link" style={{ color: "black" }}>
          Home
        </span>
      </Link>
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
  );
};

export default Header;
