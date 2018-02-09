const express = require('express');
const router = express.Router();
const Food = require('../controllers/foodController')

router.get('/', Food.findRecipe)

module.exports = router