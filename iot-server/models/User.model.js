const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
