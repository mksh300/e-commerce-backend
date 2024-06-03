const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  price: String
});

module.exports = mongoose.model('Products', userSchema);