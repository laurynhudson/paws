import React from "react";
import "../styling/Appointment.css";
import Header from "./Header";
import PetsIcon from "@mui/icons-material/Pets";

const Appointment = () => {
  return (
    <div className="Appointment">
      <Header></Header>
      <div className="AppointmentForm">
        <h1 className="schedule-appt">Schedule an Appointment</h1>
        <form className="form">
          <span className="title">Name *</span>
          <div className="name">
            <label for="first-name">First:</label>
            <input size="40" type="text" id="first-name" name="first-name" />
            <label for="last-name">Last:</label>
            <input size="40" type="text" id="last-name" name="last-name" />
          </div>
          <span>Are You a New or Existing Patient? *</span>
          <div className="patient-type">
            <input type="checkbox" id="new-patient" name="new-patient" />
            <label for="new-patient">New Patient</label>
          </div>
          <div className="patient-type">
            <input
              type="checkbox"
              id="existing-patient"
              name="existing-patient"
            />
            <label for="existing-patient">Existing Patient</label>
          </div>
          <span>Phone Number *</span>
          <div className="phone-number">
            <input
              size="94"
              type="text"
              id="phone-number"
              name="phone-number"
            />
          </div>
          <span>Email *</span>
          <div className="email">
            <input size="94" type="email" id="email" name="email" />
          </div>
          <span>Address *</span>
          <div className="address">
            <input size="94" type="text" id="address" name="address" />
          </div>
          <span>Zip Code *</span>
          <div className="zip-code">
            <input size="94" type="text" id="zip-code" name="zip-code" />
          </div>
          <span>Reason for Visit *</span>
          <div className="visit-reason">
            <input
              size="94"
              type="text"
              id="visit-reason"
              name="visit-reason"
            />
          </div>
          <span>Appointment Timeframe *</span>
          <div className="timeframe">
            <input size="94" type="text" id="timeframe" name="timeframe" />
          </div>
          <span>Additional Details & Info *</span>
          <div className="details-info">
            <input
              size="94"
              type="text"
              id="details-info"
              name="details-info"
            />
          </div>
        </form>
      </div>
      <div className="footer">
        <PetsIcon style={{ fontSize: 50 }}></PetsIcon>
      </div>
    </div>
  );
};

export default Appointment;
