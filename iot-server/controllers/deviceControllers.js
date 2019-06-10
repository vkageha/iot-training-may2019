//This is the controller module, this is basically a collection of functions we will attach in the individual routes

//It may be strange how I am exporting the functions, but rather than exporting each function individually, I am placing them in a single object and exporting that object instead

// You may also notice the async keyword before each function, this I will explain in class, so don't worry about this

//Also note each of your handler functions must have two parameters - req and res

//The try and catch statements just provide a graceful way to handle errors occuring inside the function

const Device = require("../models/Device.model");

module.exports = {
  //create new device
  async createNewDevice(req, res) {
    try {
      const newDevice = new Device(req.body);
      await newDevice.save();

      res
        .status(200)
        .json({ message: "Created a new device", device: newDevice });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // get all devices
  async getAllDevices(req, res) {
    try {
      const allDevices = await Device.find({});
      res.status(201).json({ message: "get all devices", devices: allDevices });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  //get Single Device
  async getSingleDevice(req, res) {
    const { deviceId } = req.params;
    try {
      const device = await Device.findById(deviceId);
      res.status(200).json({ message: "get single device", device: device });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // edit single device
  async editSingleDevice(req, res) {
    try {
      res.status(201).json({ message: "edit single device" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
