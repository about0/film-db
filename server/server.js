// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Options
var allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "http://localhost");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
};


// Express
const app = express();

// Options
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(bodyParser.json())
  app.use('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", ['GET', 'DELETE', 'PUT', 'POST']);
    next();
  });

// Routes
  app.use('/api', require('./routes/api'))

// Starting Server
app.listen(3333);

console.log('API is running on 3333 port');