// const express = require('express');
// const router = express.Router();
// const { signup, login } = require('../controllers/authController');

// // POST /auth/signup
// router.post('/signup', signup);

// // POST /auth/login
// router.post('/login', login);

// module.exports = router;


const express = require('express');
const router = express.Router();
const {
  signup,
  login,
  getUsers,
  registerUser,
  updateUser,
  deleteUser
} = require('../controllers/authController');

const authenticateToken = require('../middleware/authMiddleware');

// Public routes
router.post('/signup', signup);
router.post('/login', login);

// Protected routes (require token)
router.get('/users', getUsers);
router.post('/register', registerUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

module.exports = router;
