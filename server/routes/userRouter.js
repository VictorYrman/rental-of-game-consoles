import { Router } from "express";
import {
  register,
  refreshToken,
  login,
  logout,
  getUser,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/info", auth, getUser);
router.get("/refresh_token", refreshToken);

export default router;
