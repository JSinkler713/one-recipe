const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const usersController = require('./controllers/usersController');
const recipesController = require('./controllers/recipesController');

app.set('view engine', 'ejs');

app.get('/', (req,res)=> {
  console.log('hello');
  res.send('<h1> Hello there </h1>');
});

app.use('/users', usersController)
app.use('/recipes', recipesController)


app.listen(port, () => console.log(`Server is running on port ${port}`));
