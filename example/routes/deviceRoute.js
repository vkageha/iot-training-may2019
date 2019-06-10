const express = require("express");
const Device = require("../models/device.model");

const router = express.Router();

router.post("/create", async (req, res) => {
  const body = {
    name: "Dht",
    location: "Nairobi"
  };

  const newDevice = new Device(body);
  await newDevice.save();

  res.status(200).json({ device: newDevice });
});

router.get("/all", async (req, res) => {
  const allDevices = await Device.find({});

  res.status(200).json(allDevices);
});

module.exports = router;
