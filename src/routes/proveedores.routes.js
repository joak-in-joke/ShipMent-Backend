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
router.post("/edit", updateProvider);
router.post("/delete", deleteProvider);
router.get("/", getAllProviders);
router.get("/:id", getProvider);
module.exports = router;
