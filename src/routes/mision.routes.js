import { Router } from "express";
const router = Router();

import {
  createMissions,
  getAllMissions,
  getMision,
  deleteMision,
} from "../controllers/mision.controller";

//admin/dashboard
router.post("/add", createMissions);
router.post("/delete", deleteMision);
router.get("/:id", getMision);
router.get("/", getAllMissions);

export default router;
