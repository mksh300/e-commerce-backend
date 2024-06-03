const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
 userId: String,
});

module.exports = mongoose.model('Cart', cartSchema);