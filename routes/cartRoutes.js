const express = require('express');
const router = express.Router();
const ProductCart = require('../models/product_cart');

// add item to cart
router.get('/', async (req, res) => {
  try {
    const productCart = new ProductCart({
        productId: req.body.productId,
        count: req.body.productId,
        cartId: req.body.productId,
      });
      const newProductCart = await productCart.save();
    res.json(newProductCart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// remove item to cart
router.delete('/:id', async (req, res) => {
    try {
        const productCart = await ProductCart.findById(req.params.id);
        await productCart.remove()
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // to get products of cart
router.get('/items', async (req, res) => {
    try {
        const cartId = req.params.id
        const products = await ProductCart.find({ cartId: cartId });
        res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });