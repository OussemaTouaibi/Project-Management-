const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  verifyUser,
  logout,
} = require("../controllers/authController");

const { isAuthenticatedUser } = require("../middleware/auth");

//Conformation code
router.route("/verifyuser/:activationcode").post(verifyUser);

//
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/me").get(isAuthenticatedUser, getUserProfile);

module.exports = router;
