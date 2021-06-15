import { Router } from "express";
const router = Router();

import { getMercanciasbyId } from "../controllers/valorData.controller";

//admin/dashboard
// router.post("/add", createUser);
// router.get("/", getAllUsers);
router.get("/:id", getMercanciasbyId);
// router.post("/delete", deleteUser);
// router.post("/put", updateUser);

export default router;
