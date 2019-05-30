const express = require("express");
const {
  createNewUser,
  getAllUsers,
  getSingleUser,
  editSingleUser
} = require("../controllers/userControllers");

const router = express.Router();
//I have explained most of the syntax in the telemetryRoutes file, there is nothing different here, just additional routes

//create a new user
router.post("/createnewuser", createNewUser);

//get all users in the system
router.get("/getallusers", getAllUsers);

//get a single user
router.get("/getsingleuser/:userId", getSingleUser);

//edit a single user
router.patch("/edituser/:userId", editSingleUser);

module.exports = router;
