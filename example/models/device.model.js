const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deviceSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  time: {
    type: Date,
    default: Date.now
  }
});

const deviceModel = mongoose.model("device", deviceSchema);

module.exports = deviceModel;
