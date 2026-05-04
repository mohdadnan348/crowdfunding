// // import express from "express";
// // import {
// //   getDashboardStats,
// //   getAllProjectsAdmin,
// //   updateProjectStatus,
// //   getAllUsersAdmin,
// //   toggleUserBlock,
// //   getProjectInvestmentsAdmin,
// // } from "../controllers/admin.controller.js";

// // // import authMiddleware from "../middlewares/auth.middleware.js";
// // // import roleMiddleware from "../middlewares/role.middleware.js";

// // const router = express.Router();

// // // Dashboard
// // router.get("/dashboard", getDashboardStats);

// // // Projects
// // router.get("/projects", getAllProjectsAdmin);
// // router.put("/projects/:id/status", updateProjectStatus);

// // // Users
// // router.get("/users", getAllUsersAdmin);
// // router.put("/users/:id/block", toggleUserBlock);

// // // Investments
// // router.get("/investments/:projectId", getProjectInvestmentsAdmin);

// // export default router;
// import express from "express";
// import {
//   getDashboardStats,
//   getAllProjectsAdmin,
//   updateProjectStatus,
//   getAllUsersAdmin,
//   toggleUserBlock,
//   getProjectInvestmentsAdmin,
// } from "../controllers/admin.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";

// const router = express.Router();

// // Dashboard
// router.get("/dashboard", authMiddleware, getDashboardStats);

// // Projects
// router.get("/projects", authMiddleware, getAllProjectsAdmin);
// router.put("/projects/:id/status", authMiddleware, updateProjectStatus);

// // Users
// router.get("/users", authMiddleware, getAllUsersAdmin);
// router.put("/users/:id/block", authMiddleware, toggleUserBlock);

// // Investments
// router.get("/investments/:projectId", authMiddleware, getProjectInvestmentsAdmin);

// export default router;
import express from "express";
import {
  getDashboardStats,
  getAllProjectsAdmin,
  updateProjectStatus,
  getAllUsersAdmin,
  toggleUserBlock,
  toggleUserVerify, // 🔥 ADDED
  getProjectInvestmentsAdmin,
  getAdvancedAnalytics,
  getAnalyticsData,
} from "../controllers/admin.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

// Dashboard
router.get("/dashboard", authMiddleware, getDashboardStats);

// Projects
router.get("/projects", authMiddleware, getAllProjectsAdmin);
router.put("/projects/:id/status", authMiddleware, updateProjectStatus);

// Users
router.get("/users", authMiddleware, getAllUsersAdmin);
router.put("/users/:id/block", authMiddleware, toggleUserBlock);

// ✅ NEW ROUTE (VERIFY / UNVERIFY USER)
router.put("/users/:id/verify", authMiddleware, toggleUserVerify);

// Investments
router.get("/investments/:projectId", authMiddleware, getProjectInvestmentsAdmin);
// ANalystics
router.get("/analytics", authMiddleware, getAnalyticsData);
router.get("/analytics/advanced", authMiddleware, getAdvancedAnalytics);
export default router;