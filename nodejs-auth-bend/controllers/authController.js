const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const Users = require('../models/User'); // Assuming this is the correct path for the Users model
const { secret, expiresIn } = require('../config/jwt');

// Signup controller
exports.signup = async (req, res) => {
  const { email, password, username } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ email, password: hashedPassword, username });
  await newUser.save();

  const token = jwt.sign({ email }, secret, { expiresIn });
  res.json({ access_token: token });
};

// Login controller
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ email }, secret, { expiresIn });
  res.json({ access_token: token });
};

// ✅ GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users' });
  }
};

// // ✅ POST create a new user
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     const userExists = await User.findOne({ email });
//     if (userExists) {
//       return res.status(400).json({ message: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, username, password: hashedPassword });
//     await newUser.save();

//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ message: 'User creation failed' });
//   }
// };

exports.registerUser = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error('Error during user registration:', err); // 👈 Add this
    res.status(500).json({ message: 'User creation failed' });
  }
};


// ✅ PUT update user
exports.updateUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      { username, email, password: hashedPassword },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: 'User update failed' });
  }
};

// ✅ DELETE user
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'User deletion failed' });
  }
};
