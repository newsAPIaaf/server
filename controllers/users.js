const UserModel = require('../models/user')

class UserController {
  static createUser (req, res) {
    let newUser = new UserModel ({
      name: req.body.name
    })
    newUser.save()
    .then(result => {
      res.status(200).json({
        msg: 'New User Created',
        user: result
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Failed to create new User',
        err: err
      })
    })
  }
  static updateUserBodyType (req, res) {
    UserModel.update({
      name: req.body.name
    },{
      $set: {
        bodyType: req.body.bodyType
      }
    })
    .then(response => {
      res.status(200).json({
        msg: 'User Body Type Updated',
        response: response
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Failed to update User',
        err: err
      })
    })
  }
  static updateFood (req, res) {
    UserModel.update({
      name: req.body.name
    },{
      $set: {
        food: req.body.food
      }
    })
    .then(response => {
      res.status(200).json({
        msg: 'User Food Updated',
        response: response
      })
    })
    .catch(err => {
      res.status(500).json({
        msg: 'Failed to update User',
        err: err
      })
    })
  }
}
module.exports = UserController;