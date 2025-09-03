import express from "express";
import {
  authUser,
  createUser,
  logoutUser,
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  deleteUserById,
} from "../controllers/userControllers.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

//Authentication Routes
router.post("/", createUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

//User Routes
router
  .route("/profile")
  .get(authenticate, getUserProfile)
  .put(authenticate, updateUserProfile);

//Admin Routes
router.route("/").get(authenticate, authorizeAdmin, getAllUsers);
router.route("/:id").delete(authenticate, authorizeAdmin, deleteUserById); //this because if we not provide params admin oly can delete them self

export default router;
