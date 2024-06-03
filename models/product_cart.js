const mongoose = require('mongoose');

const productCartSchema = new mongoose.Schema({
 cartId: String,
 productId: String,
 count: String
});

module.exports = mongoose.model('ProductCart', productCartSchema);