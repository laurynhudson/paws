import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../styling/Home.css";
import Header from "./Header";

const Home = () => {
  return (
    <div className="Home">
      <Header></Header>
      <div>
        <img src="../paws.png" className="logo" alt="paws-logo"></img>
      </div>
      <div className="split-left">
        <div className="care">
          Get premium care, in the comfort of your home.
        </div>
      </div>
      <div className="split-right">
        <img src="../pup.png" className="pup" alt="dog" />
      </div>
      <div className="appointment-button">
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
