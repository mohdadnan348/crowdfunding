import express from "express";
import {
  createProject,
  updateProject,
  publishProject,
  getAllProjects,
  getProjectById,
  getMyProjects,
} from "../controllers/project.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

// Public
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

// Creator
router.post("/", createProject);
router.put("/:id", updateProject);
router.get("/my/projects", getMyProjects);

// Admin
router.put("/:id/publish", publishProject);

export default router;
