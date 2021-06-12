import { Router } from "express";
const router = Router();

import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/usuario.controller";

//admin/dashboard
router.post("/add", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/delete", deleteUser);
router.post("/put", updateUser);

export default router;
