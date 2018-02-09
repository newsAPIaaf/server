const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  name: String,
  image: String,
  ingredient: Array,
  diet: Array,
  health: Array
})

const Food = mongoose.model('Food', foodSchema)

module.exports = Food