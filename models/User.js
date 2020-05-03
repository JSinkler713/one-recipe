const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },  
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },  
  password: {
    type: String,
  }, 
  createdRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  likedRecipes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Recipe'
  }],
  bakingWith: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);

module.exports = User;
