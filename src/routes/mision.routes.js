import { Router } from "express";
const router = Router();

import {
  createMissions,
  getAllMissions,
  getMision,
  deleteMision,
  updateMision,
  getActiveMissions,
  getFinalizedMissions,
} from "../controllers/mision.controller";

//admin/dashboard
router.post("/add", createMissions);
router.get("/", getAllMissions);
router.get("/:id", getMision);
router.post("/delete", deleteMision);
router.post("/put", updateMision);
router.get("/activos", getActiveMissions);
router.get("/finalizados", getFinalizedMissions);

export default router;
