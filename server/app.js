const express = require("express");

const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");
const errorMiddleware = require("./middleware/errors");
const app = express();

// routes
const auth = require('./routes/auth');


app.use('/api/v1', auth);


app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());

//Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
