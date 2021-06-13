import { Router } from "express";
const router = Router();

import {
  createEmbarque,
  getEmbarque,
  deleteEmbarque,
  updateEmbarques,
  getActivos,
  getFinalizados,
  getallEmbarques,
  getEstado,
} from "../controllers/embarques.controller";

//admin/dashboard
router.get("/active", getActivos);
router.get("/finished", getFinalizados);
router.get("/state", getEstado);
// router.post("/:id", setEstado);
router.get("/:id", getEmbarque);

router.get("/", getallEmbarques);

router.post("/create", createEmbarque);
router.post("/update/:id", updateEmbarques);
router.post("/delete/:id", deleteEmbarque);

export default router;
