//This is the controller module, this is basically a collection of functions we will attach in the individual routes

//It may be strange how I am exporting the functions, but rather than exporting each function individually, I am placing them in a single object and exporting that object instead

// You may also notice the async keyword before each function, this I will explain in class, so don't worry about this

//Also note each of your handler functions must have two parameters - req and res

//The try and catch statements just provide a graceful way to handle errors occuring inside the function

module.exports = {
  //create new user
  async createNewUser(req, res) {
    try {
      res.status(200).json({ message: "Create new user" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // get all users
  async getAllUsers(req, res) {
    try {
      res.status(201).json({ message: "get all users" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
  //get Single User
  async getSingleUser(req, res) {
    try {
      res.status(200).json({ message: "get single user" });
    } catch (error) {
      res.status(500).json({ error });
    }
  },

  // edit single user
  async editSingleUser(req, res) {
    try {
      res.status(201).json({ message: "edit single user" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
};
