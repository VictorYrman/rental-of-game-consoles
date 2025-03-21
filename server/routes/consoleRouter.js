import Router from "express";
import {
  getConsoles,
  createConsole,
  deleteConsole,
  updateConsole,
} from "../controllers/consoleController.js";
import auth from "../middlewares/auth.js";

const router = new Router();

router.route("/consoles").get(getConsoles).post(auth, createConsole);

router
  .route("/consoles/:id")
  .delete(auth, deleteConsole)
  .put(auth, updateConsole);

export default router;
