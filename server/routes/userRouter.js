import { Router } from "express";
import {
  register,
  refreshToken,
  login,
  logout,
  getUser,
  getUsers,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import auth from "../middlewares/auth.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = new Router();

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/info", auth, getUser);
router.get("/refresh_token", refreshToken);

router.route("/").get(auth, authAdmin, getUsers);
router
  .route("/:id")
  .delete(auth, authAdmin, deleteUser)
  .put(auth, authAdmin, updateUser);

export default router;
