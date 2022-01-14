const express = require("express");

const AppointmentController = require("../controllers/AppointmentController");

const router = express.Router();

router.post("/appointment", AppointmentController.createAppointment);
router.put("/appointment/:id", AppointmentController.updateAppointment);
router.delete("/appointment/:id", AppointmentController.deleteAppointment);
router.get("/appointment/:id", AppointmentController.getAppointmentById);
router.get("/appointment", AppointmentController.getAppointment);

module.exports = router;
