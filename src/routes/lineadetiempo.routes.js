import { Router } from "express";
const router = Router();

import {
  createComentary,
  UpdateTimeline,
  deleteTimeline,
  getTimelinesbyid,
  deleteComentary,
  finishTimeline,
} from "../controllers/lineadetiempo.controller";

//admin/dashboard
router.post("/add", createComentary);
router.post("/delete", deleteComentary);
router.post("/finish", finishTimeline);
router.put("/:id", UpdateTimeline);

router.delete("/:id", deleteTimeline);
router.get("/:id", getTimelinesbyid);

export default router;
