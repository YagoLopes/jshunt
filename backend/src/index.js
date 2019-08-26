const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const server = express();

mongoose
  .connect("mongodb://mongodb/jshunt", { useNewUrlParser: true })
  .then(() => {
    console.log("#############################################");
    console.log("Connected to MongoDB");
    console.log("#############################################");
  })
  .catch(err => {
    console.log("#############################################");
    console.log(err);
    console.log("#############################################");
    process.exit(1); //quit the process
  });
require("./models/Products");

server.use(cors());
server.use(express.json());
server.use(routes);
server.listen(4000, () => {
  console.log("#############################################");
  console.log("NodeJS and Express Strated.");
  console.log("#############################################");
});
