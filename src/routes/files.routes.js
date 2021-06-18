const express = require("express");
const router = express.Router();
import {
  uploadFile,
  //   getAllProviders,
  //   getProvider,
  //   deleteProvider,
  //   updateProvider,
  //   getProviderList,
} from "../controllers/proveedor.controller.js";

// auth

router.post("/upload", uploadFile);
// router.get("/all", getProviderList);
// router.post("/edit", updateProvider);
// router.post("/delete", deleteProvider);
// router.get("/", getAllProviders);
// router.get("/:id", getProvider);

export default router;
