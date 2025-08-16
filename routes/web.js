import express from "express";
import validate from "../middleware/validate.js";
import { createPostProducts } from "../request/productValidate.js";

import {
  home,
  get,
  getById,
  search,
  create,
  update,
  filters,
  deleteProduct,
} from "../handler/product.js";

const router = express.Router();

router.get("/", home);
router.get("/api/product", get);
router.get("/api/product/:id", getById);
// router.get("/api/product/search/:keyword", search);
router.post("/api/createPostProducts", createPostProducts, validate, create);
router.put("/api/updatePutProducts", update);
router.delete("/api/deleteProduct/:id", deleteProduct);
router.get("/api/product/filters", filters);
// router.get("/api/merek", getMerek);
// router.get("/api/merek/:id", createMerek);
// router.post("/api/updatePutProduts", updateMerek);
// router.put("/api/updatePutProduts");
export default router;
