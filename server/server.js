
// Dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// MongoDB
mongoose.connect('mongodb://localhost/rest_test');

// Express
const app = express();
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

// Routes
app.use('/api', require('./routes/api'))

// Starting Server
app.listen(3333);
console.log('API is running on 3333 port');