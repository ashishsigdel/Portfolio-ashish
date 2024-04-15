import express from "express";
import {
  createProject,
  getProject,
  getProjects,
} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/create", createProject);
router.get("/get", getProjects);
router.get("/get-project/:slug", getProject);

export default router;
