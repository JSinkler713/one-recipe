const express = require('express')
const router = express.Router();

// Database
const db = require('../models')

router.get('/', async (req, res)=> {
  try {
    const users = await db.User.find()
    res.render('users/index', {
      users
    })
  }
  catch(err) {
    res.send(err)
  }
})

module.exports = router
