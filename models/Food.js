const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  image: String,
  ingredient: String,
  diet: String,
  health: String
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food