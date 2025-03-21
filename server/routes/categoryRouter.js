import Router from "express";
import {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import auth from "../middlewares/auth.js";
import authAdmin from "../middlewares/authAdmin.js";

const router = new Router();

router
  .route("/categories")
  .get(getCategories)
  .post(auth, authAdmin, createCategory);

router
  .route("/categories/:id")
  .delete(auth, authAdmin, deleteCategory)
  .put(auth, authAdmin, updateCategory);

export default router;
