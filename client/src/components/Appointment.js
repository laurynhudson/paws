import React from "react";
import "../styling/Appointment.css";

const Appointment = () => {
  return (
    <div className="Appointment">
      <div className="AppointmentForm">
        <h1>Schedule an Appointment</h1>
        <form>
          <span className="title">Name *</span>
          <div className="name">
            <label>
              First Name
              <input type="text" name="name" />
            </label>
            <label>
              Last Name
              <input type="text" name="name" />
            </label>
          </div>
          <span>Are You a New or Existing Patient? *</span>
          <div className="patient-type">
            <input type="text" name="name" />
          </div>
          <span>Phone Number *</span>
          <div className="phone-number">
            <input type="text" name="name" />
          </div>
          <span>Email *</span>
          <div className="email">
            <input type="text" name="name" />
          </div>
          <span>Address *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
          <span>Zip Code *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
          <span>How Did You Hear About Us? *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
          <span>Reason for Visit *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
          <span>Appointment Timeframe *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
          <span>Additional Details & Info *</span>
          <div className="address">
            <input type="text" name="name" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
