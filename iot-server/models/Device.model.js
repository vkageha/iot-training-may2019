const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DeviceSchema = new Schema({
  name: {
    type: String
  },
  lon: {
    type: String
  },
  lat: {
    type: String
  }
});

module.exports = mongoose.model("Device", DeviceSchema);
