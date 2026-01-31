const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {expiresIn: "7d",});
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {};

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {};

// @desc    Upload user profile
// @route   POST /api/auth/profile
// @access  Private
const uploadUserProfile = async (req, res) => {};
module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  uploadUserProfile,
};