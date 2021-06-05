import { Router } from "express";
const router = Router();

import { getDataEmbarque } from "../controllers/dataembarque.controller";

//admin/dashboard

router.get("/:id", getDataEmbarque);

export default router;
