const express = require("express");
const router = express.Router();
import {
  createClient,
  getAllClients,
  getClient,
  deleteClient,
  updateClient,
} from "../controllers/cliente.controller.js";

// auth

router.post("/", createClient);
router.get("/", getAllClients);
router.get("/:id", getClient);
router.delete("/:id", deleteClient);
router.put("/:id", updateClient);
module.exports = router;
