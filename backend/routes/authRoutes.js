const express = require("express");
const { registerUser } = require("../controllers/authController");
const { loginUser } = require("../controllers/loginController");
const validateRegistration = require("../middleware/validateRegistration");

const router = express.Router();

// Registration
router.post("/register", validateRegistration, registerUser);

// Login
router.post("/login", loginUser);

module.exports = router;