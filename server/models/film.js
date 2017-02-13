
// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const filmSchema = new mongoose.Schema({
  id: Number,
  name: String,
  rating: String,
  cast: Array,
  year: Number,
  format: String,
  cover_image: String
})

// Return model
module.exports = restful.model('Films', filmSchema)

