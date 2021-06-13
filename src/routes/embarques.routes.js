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
router.get("/activos", getActivos);
router.get("/finalizados", getFinalizados);
router.get("/estado", getEstado);
// router.post("/:id", setEstado);
router.get("/:id", getEmbarque);

router.get("/", getallEmbarques);

router.post("/create", createEmbarque);
router.post("/update/:id", updateEmbarques);
router.post("/delete/:id", deleteEmbarque);

export default router;
