const express = require('express')
const router = express.Router();

// Database
const db = require('../models')

router.get('/', async (req, res)=> {
  try {
    const recipes = await db.Recipe.find()
    res.render('recipes/index', {
      recipes
    })
  }
  catch(err) {
    res.send(err)
  }
})

module.exports = router
