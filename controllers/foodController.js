const axios = require('axios')

let findRecipe = (req, res) => {
  axios.get(`https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.ID_SECRET}&app_key=${process.env.APP_KEY}`)
    .then(response => {
      let arrFood = []
      response.data.hits.map((x, i) => {
        let label = x.recipe.label
        let image = x.recipe.image
        let ingredient = x.recipe.ingredientLines
        let diet = x.recipe.dietLabels
        let health = x.recipe.healthLabels
        arrFood.push({label, image, ingredient, diet, health})
      })
      res.status(200).json({
        msg: 'list all recipe',
        foods: arrFood
      })
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  findRecipe
}