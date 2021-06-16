import { Router } from "express";
const router = Router();


import {
  getMercanciasbyId,
  deleteMercancia,
} from "../controllers/valordata.controller";



//admin/dashboard
// router.post("/add", createUser);
// router.get("/", getAllUsers);
router.get("/:id", getMercanciasbyId);
router.post("/delete", deleteMercancia);
// router.post("/put", updateUser);

export default router;
