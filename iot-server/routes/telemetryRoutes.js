const express = require("express");

const router = express.Router();

//Check the system_design document to follow how I am coming up with the routes

// The below syntax may be new, it is called destructuring(google this). The thing is that I have defined my telemetry handler functions in the contollers folder and in the telemetryControllers file. Instead of importing the whole module and using the . operator to access individual functions, I can just store them directly in the respective variables and use those names (will explain this more, don't panick)
const {
  getAllTelemetry,
  createTelemetry
} = require("../controllers/telemetryControllers");



//get telemetry for a particular device - remember in the system description the full route is telemetry/:deviceId, but we ommit 'telemetry' since its already covered in the app.js main file which will forward any route with api/telemetry to this handler file

router.get("/:deviceId", getAllTelemetry);


// store a dataset for a particular telemtery - must include the deviceId - you may notice that this route is exaclty equivalent to the get route with the difference of the HTTP method - this is now a POST rather than a get , they have different handler functions

router.get("/create/:deviceId", createTelemetry);

module.exports = router;
