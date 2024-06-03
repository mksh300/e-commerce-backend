const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
 userId: String,
 status: String
});

module.exports = mongoose.model('Order', orderSchema);