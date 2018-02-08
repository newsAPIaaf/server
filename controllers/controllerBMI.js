'use strict'
const axios = require('axios');


module.exports = class ControllerBMI {
  constructor() {

  }

  static getAll(req, res) {
    axios.get(`https://gabamnml-health-v1.p.mashape.com/bmi?height=${req.body.height}&weight=${req.body.weight}`,
      {headers : {'X-Mashape-Key' : 'VxyS55s1vemshKgpqOSeu5bNtzv3p1dqKZCjsnBgLRD9oS2rNr'}})
    .then(function (response) {
      console.log('responn');
      res.status(200).send(response.data)
    })
    .catch(function (error) {
      console.log(error);
      console.log('catchh');
      res.status(500).send(error)
    })
  }
}
