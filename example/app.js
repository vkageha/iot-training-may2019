const express = require("express");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const deviceRoutes = require('./routes/deviceRoute');
const mongoose = require('mongoose');

const app = express();



//connect to the db
mongoose
  .connect("<MongoURI>", {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => console.log("Connection to MongoDB Successful"))
  .catch(err => console.error(err));



app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/devices", deviceRoutes);

app.listen(5080, function() {
  console.info("The app has started");
});
