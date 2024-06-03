const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Cart = require('../models/cart');

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/', async (req, res) => {  
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    phoneNumber: req.body.phoneNumber,
  });
  
  try {
    const newUser = await user.save();
    const cart = new Cart({
      userId: newUser.id
    })
    await cart.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// get perticular user
router.get('/:id', async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'Cannot find user' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});



module.exports = router;