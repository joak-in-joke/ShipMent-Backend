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
} from "../controllers/embarques.controller";

//admin/dashboard

router.get("/", getallEmbarques);
router.get("/:id", getEmbarque);
router.get("/activos/:id", getActivos);
router.get("/finalizados/:id", getFinalizados);

router.post("/create", createEmbarque);
router.post("/update/:id", updateEmbarques);
router.post("/delete/:id", deleteEmbarque);

export default router;
