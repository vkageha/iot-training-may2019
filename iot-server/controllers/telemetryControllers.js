//This is the controller module, this is basically a collection of functions we will attach in the individual routes

//It may be strange how I am exporting the functions, but rather than exporting each function individually, I am placing them in a single object and exporting that object instead

// You may also notice the async keyword before each function, this I will explain in class, so don't worry about this

//Also note each of your handler functions must have two parameters - req and res

//The try and catch statements just provide a graceful way to handle errors occuring inside the function



module.exports = {
  //get all telemetry
  async getAllTelemetry(req, res) {
    
    try {

      res.status(200).json({ message: "All telemetry for a device" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // create new data point
  async createTelemetry(req, res) {
    try {
      res.status(201).json({ message: "New Telemetry created" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
