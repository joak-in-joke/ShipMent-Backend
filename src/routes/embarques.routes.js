import { Router } from "express";
const router = Router();

import {
  createEmbarque,
  getEmbarques,
  deleteEmbarque,
  updateEmbarques,
  getActivos,
  getFinalizados,
  getallEmbarques,
} from "../controllers/embarques.controller";

//admin/dashboard
router.post("/", createEmbarque);
router.get("/:id", getEmbarques);
router.get("/", getallEmbarques);
router.delete("/:id", deleteEmbarque);
router.put("/:id", updateEmbarques);
router.get("/activos/:id", getActivos);
router.get("/finalizados/:id", getFinalizados);

export default router;
