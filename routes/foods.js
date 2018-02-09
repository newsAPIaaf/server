const express = require('express');
const router = express.Router();
const Food = require('../controllers/foodController')

router.get('/', Food.findRecipe)
router.post('/', Food.saveRecipe)

module.exports = router