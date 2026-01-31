const express = require('express');
const { registerUser, loginUser, getUserProfile, uploadUserProfile } = require('../controllers/authController');
const router = express.Router();

//auth Routes
router.post('/register', registerUser);                //Register user
router.post('/login', loginUser);                      //Login user
router.get('/profile', protect, getUserProfile);       //Get user profile
router.post('/profile', protect, uploadUserProfile);   //Upload profile image

module.exports = router;