const mongoose = require('mongoose')

let Schema = mongoose.Schema;

let userFbSchema = new Schema ({
  name: {
    type: String,
    required: true
  },
  bodyType: {
    type: String
  },
  food: {
    type: Array
  }
})

const userFb = mongoose.model('userFb', userFbSchema)

module.exports = userFb;