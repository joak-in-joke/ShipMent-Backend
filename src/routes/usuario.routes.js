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
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
