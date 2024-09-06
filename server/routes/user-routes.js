const router = require("express").Router();
import { protectRoute } from "../middleware/protectRoute.js";
const {
  followUnfollowUser,
  getSuggestedUsers,
  getUserProfile,
  updateUser,
} = require("../../controllers/user-controller");


router.route("/profile/:username").get(protectRoute, getUserProfile);

router.route("/suggested").get(protectRoute, getSuggestedUsers);

router.route("/follow/:id").post(protectRoute, followUnfollowUser);

router.route("/update").post(protectRoute, updateUser);

module.exports = router;
