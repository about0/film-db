
// Dependencies
const express = require('express');
const router  = express.Router();

// Models
const Film = require('../models/film')

//Routes
Film.methods(['get', 'post', 'put', 'delete'])
Film.register(router, '/films');

// Return Router

module.exports = router;