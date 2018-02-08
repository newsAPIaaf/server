const axios = require('axios')

let findRecipe = (req, res) => {
  console.log('masuk sini pertama')
  axios.get(`https://api.edamam.com/search?q=${req.query.q}&app_id=${process.env.ID_SECRET}&app_key=${process.env.APP_KEY}`)
    .then(response => {
      let foods = null
      response.data.hits.map(arrFood => {
        foods = arrFood.recipe
        console.log(foods)
        res.status(200).json({
          msg: 'berhasil',
          name: foods.label,
          recipe :foods.recipe,
          ingredients: foods.ingredientLines,
          health: foods.healthLabels,
          diet: foods.dietLabels
        })
      })   
    })
    .catch(err => {
      res.status(500).send(err)
    })
}

module.exports = {
  findRecipe
}