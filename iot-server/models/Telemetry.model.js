const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TelemetrySchema = new Schema({
  name: {
    type: String
  },
  temprature: {
    type: Number
  },
  humidity: {
    type: Number
  },
  time: {
    type: Date,
    default: Date.now
  },
  sensor_id:{
      type:String
  }
});

module.exports = mongoose.model("Telemetry", TelemetrySchema);
