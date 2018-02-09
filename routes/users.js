var express = require('express');
var router = express.Router();
const UserController = require ('../controllers/users')

/* GET users listing. */
router.post('/', UserController.createUser);
router.post('/updateBMI', UserController.updateUserBodyType)

module.exports = router;
