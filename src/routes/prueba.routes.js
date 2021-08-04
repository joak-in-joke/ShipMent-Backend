import { Router } from "express";
const router = Router();

import { findAllUsers } from "../controllers/prueba.js";

//admin/dashboard

router.get("/prueba", findAllUsers);

export default router;
