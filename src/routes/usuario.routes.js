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
router.get("/:id", getUser);
router.get("/", getAllUsers);

router.post("/update", updateUser);
router.post("/delete", deleteUser);
router.post("/add", createUser);

export default router;
