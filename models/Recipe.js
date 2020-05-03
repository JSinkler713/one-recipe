const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },  
  description: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {timestamps: true});

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;
