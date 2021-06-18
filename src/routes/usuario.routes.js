import { Router } from "express";
const router = Router();

import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
  updatePassword,
} from "../controllers/usuario.controller";

//admin/dashboard

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/update", updateUser);
router.post("/delete", deleteUser);
router.post("/add", createUser);
router.post("/updatepassword", updatePassword);

export default router;
