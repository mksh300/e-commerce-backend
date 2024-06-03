const express = require('express');
const router = express.Router();
const Products = require('../models/products');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new products
router.post('/', async (req, res) => {  
  const product = new Products({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get perticular product
router.get('/:id', async(req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: 'Cannot find product' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});



module.exports = router;