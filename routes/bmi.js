var express = require('express');
var router = express.Router();
var controllerBMI = require('../controllers/controllerBMI')

router.get('/', controllerBMI.getAll)

module.exports = router;
