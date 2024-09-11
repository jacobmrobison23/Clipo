const router = require("express").Router();

import {
  getUserProfile,
  getSuggestedUsers,
  followUnfollowUser,
  updateUser,
  login,
} from "../controllers/user.controller.js";

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getUserProfile);

router.route("/update/:userID").put(authMiddleware, updateUser);

router.route("/users").get(getSuggestedUsers);

router.route("/friends/:frendID").delete(authMiddleware, followUnfollowUser);

module.exports = router;
