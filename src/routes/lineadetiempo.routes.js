import { Router } from "express";
const router = Router();

import {
  createTimeline,
  UpdateTimeline,
  deleteTimeline,
  getTimelinesbyid,
} from "../controllers/lineadetiempo.controller";

//admin/dashboard
router.post("/", createTimeline);
router.put("/:id", UpdateTimeline);

router.delete("/:id", deleteTimeline);
router.get("/:id", getTimelinesbyid);

export default router;
