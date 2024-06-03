const express = require('express');
const router = express.Router();
const order_product = require('../models/order_product');

// create a order
router.get('/', async (req, res) => {
  try {
    
    res.json([]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// update a order
router.get('/', async (req, res) => {
    try {
      
      res.json([]);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  // delete a order
router.get('/', async (req, res) => {
    try {
      
      res.json([]);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
