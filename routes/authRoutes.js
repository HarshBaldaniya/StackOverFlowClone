import express from "express";
import {
  register,
  login,
  logout,
  getUserData,
  createQuestion,
  updateQuestion,
  deleteQuestion,
  getAllQuestions,
} from "../controllers/authController.js";
import { verifyUser } from "../middlewares/middlewares.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/", verifyUser, getUserData);
router.post("/create-question", verifyUser, createQuestion);
router.post("/update-question", updateQuestion);
router.post("/delete-question", deleteQuestion);
router.get("/list", getAllQuestions);

export default router;
