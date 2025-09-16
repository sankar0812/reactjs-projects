// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const jwt = require('jsonwebtoken');

// // Register a new user
// router.post('/register', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user already exists
//     let user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({ message: 'User already exists with this email.' });
//     }

//     // Create new user
//     user = new User({ email, password });
//     await user.save();

//     res.status(201).json({ message: 'User registered successfully.' });
//   } catch (error) {
//     console.error('Error during registration:', error);
//     res.status(500).json({ message: 'Server error during registration.' });
//   }
// });

// // Login user
// router.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials.' });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials.' });
//     }

//     // Generate JWT token
//     const token = jwt.sign(
//       { id: user._id },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' } // Token expires in 1 hour
//     );

//     res.json({ message: 'Logged in successfully!', token });
//   } catch (error) {
//     console.error('Error during login:', error);
//     res.status(500).json({ message: 'Server error during login.' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Check password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.json({ message: 'Logged in successfully!', token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;
