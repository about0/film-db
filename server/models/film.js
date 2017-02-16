
// Dependencies
const restful = require('node-restful');
const mongoose = restful.mongoose;

// Schema
const filmSchema = new mongoose.Schema({
  id: Number,
  name: {type: String, required: true, trim: true},
  rating: String,
  cast: Array,
  year: Number,
  format: String,
  cover_image: String,
  created_at: {type: Date},
  updated_at: {type: Date}
},
  {
    timestamps: true
  }
)


// Return model
module.exports = restful.model('Films', filmSchema)

