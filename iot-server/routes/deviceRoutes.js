const express = require("express");
const {
  createNewDevice,
  getAllDevices,
  getSingleDevice,
  editSingleDevice
} = require("../controllers/deviceControllers");

const router = express.Router();
//I have explained most of the syntax in the telemetryRoutes file, there is nothing different here, just additional routes

//create a new device
router.post("/createnewdevice", createNewDevice);

//get all devices in the system
router.get("/getalldevices", getAllDevices);

//get a single device
router.get("/getsingledevice/:deviceId", getSingleDevice);

//edit a single device
router.patch("/editdevice/:deviceId", editSingleDevice);

module.exports = router;
