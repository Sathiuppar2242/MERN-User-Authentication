const express = require("express");
const { registerUser } = require("../controllers/authController");
const validateRegistration = require("../middleware/validateRegistration");

const router = express.Router();

router.post("/register", validateRegistration, registerUser);

module.exports = router;