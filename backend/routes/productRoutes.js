import express from "express";
const router = express.Router();

import {
  createProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

router.route("/").post(createProduct).get(getAllProduct);
router
  .route("/:id")
  .get(getSingleProduct)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
