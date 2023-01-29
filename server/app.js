const express = require("express");
const app = express();
const errorMiddleware = require("./middleware/errors");

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
