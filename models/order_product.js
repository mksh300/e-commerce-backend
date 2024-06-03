const mongoose = require('mongoose');

const orderCartSchema = new mongoose.Schema({
 userId: String,
 productId: String,
});

module.exports = mongoose.model('OrderCart', orderCartSchema);