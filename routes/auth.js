const express = require("express");
const authController = require("../controllers/auth");
const router = express.Router();

router.post("/signup",authController.postAuthSignUp);

router.post("/signin",authController.postAuthSignIn);

module.exports = router;