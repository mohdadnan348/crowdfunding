import express from "express";
import {
  createInvestment,
  getMyInvestments,
  getProjectPublicInvestments,
  getProjectFullInvestments,
} from "../controllers/investment.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

const router = express.Router();

// Create investment
router.post("/", createInvestment);

// My investments
router.get("/my", getMyInvestments);

// Public investments (name only)
router.get("/project/:projectId", getProjectPublicInvestments);

// Full investments (admin/creator)
router.get("/admin/:projectId", getProjectFullInvestments);

export default router;
