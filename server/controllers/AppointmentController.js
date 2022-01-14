const Appointment = require("../models/AppointmentModel");

createAppointment = (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must make an appointment",
    });
  }

  const appointment = new Appointment(body);

  if (!Appointment) {
    return res.status(400).json({ success: false, error: err });
  }

  appointment
    .save()
    .then(() => {
      return res.status(201).json({
        success: true,
        id: appointment._id,
        message: "Appointment created!",
      });
    })
    .catch((error) => {
      return res.status(400).json({
        error,
        message: "Appointment not created!",
      });
    });
};

updateAppointment = async (req, res) => {
  const body = req.body;

  if (!body) {
    return res.status(400).json({
      success: false,
      error: "You must provide a body to update",
    });
  }

  Appointment.findOne({ _id: req.params.id }, (err, appointment) => {
    if (err) {
      return res.status(404).json({
        err,
        message: "Appointment not found!",
      });
    }
    appointment.first = body.first;
    appointment.last = body.last;
    appointment.phoneNumber = body.phoneNumber;
    appointment.existing = body.existing;
    appointment.email = body.email;
    appointment.address = body.address;
    appointment.zipCode = body.zipCode;
    appointment.appointmentTimeframe = body.appointmentTimeframe;
    appointment.additionalDetailsAndInfo = body.additionalDetailsAndInfo;

    appointment
      .save()
      .then(() => {
        return res.status(200).json({
          success: true,
          id: appointment._id,
          message: "Appointment updated!",
        });
      })
      .catch((error) => {
        return res.status(404).json({
          error,
          message: "Appointment not updated!",
        });
      });
  });
};

deleteAppointment = async (req, res) => {
  await Appointment.findOneAndDelete(
    { _id: req.params.id },
    (err, appointment) => {
      if (err) {
        return res.status(400).json({ success: false, error: err });
      }

      if (!appointment) {
        return res
          .status(404)
          .json({ success: false, error: `Appointment not found` });
      }

      return res.status(200).json({ success: true, data: appointment });
    }
  ).catch((err) => console.log(err));
};

getAppointmentById = async (req, res) => {
  await Appointment.findOne({ _id: req.params.id }, (err, appointment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }

    if (!appointment) {
      return res
        .status(404)
        .json({ success: false, error: `Appointment not found` });
    }
    return res.status(200).json({ success: true, data: appointment });
  }).catch((err) => console.log(err));
};

getAppointment = async (req, res) => {
  await Appointment.find({}, (err, appointment) => {
    if (err) {
      return res.status(400).json({ success: false, error: err });
    }
    if (!appointment.length) {
      return res
        .status(404)
        .json({ success: false, error: `Appointment not found` });
    }
    return res.status(200).json({ success: true, data: appointment });
  }).catch((err) => console.log(err));
};

module.exports = {
  createAppointment,
  updateAppointment,
  deleteAppointment,
  getAppointment,
  getAppointmentById,
};
