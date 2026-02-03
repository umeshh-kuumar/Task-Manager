const express = require('express');
const { registerUser, loginUser, getUserProfile, updateUserProfile } = require('../controllers/authController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

//auth Routes
router.post('/register', registerUser);                //Register user
router.post('/login', loginUser);                      //Login user
router.get('/profile', protect, getUserProfile);       //Get user profile
router.put('/profile', protect, updateUserProfile);   //Upload profile image

module.exports = router;