const express = require('express');
const router = express.Router();
const OrderProduct = require('../models/order_product');
const Order = require('../models/order');

// create a order
router.get('/', async (req, res) => {
  try {
    const orderProduct = new OrderProduct({
        userId: req.body.userId,
        productId: req.body.productId,
      });
      const newOrderProduct = await orderProduct.save();
    res.json(newOrderProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update a order
router.post('/', async (req, res) => {
    try {
       const orderProduct = await Order.findById(req.params.id);
       orderProduct.status = req.body.status
       const newOrderProduct = await orderProduct.save()
       res.json(newOrderProduct);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  
