import express from "express";
import { signIn, signOut } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/signin", signIn);
router.get("/signout", signOut);

export default router;
