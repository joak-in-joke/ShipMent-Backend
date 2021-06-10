const express = require("express");
const router = express.Router();
import {
  createProvider,
  getAllProviders,
  getProvider,
  deleteProvider,
  updateProvider,
} from "../controllers/proveedor.controller.js";

// auth

router.post("/add", createProvider);
router.get("/", getAllProviders);
router.get("/:id", getProvider);
router.post("/delete", deleteProvider);
router.put("/:id", updateProvider);
module.exports = router;
