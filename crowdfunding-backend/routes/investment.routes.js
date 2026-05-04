// // import express from "express";
// // import {
// //   createInvestment,
// //   getMyInvestments,
// //   getProjectPublicInvestments,
// //   getProjectFullInvestments,
// // } from "../controllers/investment.controller.js";

// // // import authMiddleware from "../middlewares/auth.middleware.js";
// // // import roleMiddleware from "../middlewares/role.middleware.js";

// // const router = express.Router();

// // // Create investment
// // router.post("/", createInvestment);

// // // My investments
// // router.get("/my", getMyInvestments);

// // // Public investments (name only)
// // router.get("/project/:projectId", getProjectPublicInvestments);

// // // Full investments (admin/creator)
// // router.get("/admin/:projectId", getProjectFullInvestments);

// // export default router;
// import express from "express";
// import {
//   createInvestment,
//   getMyInvestments,
//   getProjectPublicInvestments,
//   getProjectFullInvestments,
// } from "../controllers/investment.controller.js";

// import authMiddleware from "../middlewares/auth.middleware.js";
// import roleMiddleware from "../middlewares/role.middleware.js";

// const router = express.Router();

// // ✅ Create investment (Investor only)
// router.post("/", authMiddleware, roleMiddleware("INVESTOR"), createInvestment);

// // ✅ My investments
// router.get("/my", authMiddleware, roleMiddleware("INVESTOR"), getMyInvestments);

// // Public investments
// router.get("/project/:projectId", getProjectPublicInvestments);

// // Admin/creator
// router.get(
//   "/admin/:projectId",
//   authMiddleware,
//   roleMiddleware("ADMIN", "CREATOR"),
//   getProjectFullInvestments
// );

// export default router;
import express from "express";
import {
  createInvestment,
  getMyInvestments,
  getProjectPublicInvestments,
  getProjectFullInvestments,
} from "../controllers/investment.controller.js";

import authMiddleware from "../middlewares/auth.middleware.js";
import roleMiddleware from "../middlewares/role.middleware.js";
import upload from "../middlewares/upload.middleware.js"; // ✅ ADD THIS

const router = express.Router();

// ✅ CREATE INVESTMENT (FIXED 🔥)
router.post(
  "/",
  authMiddleware,
  roleMiddleware("INVESTOR"),
  upload.single("proof"), // ✅ VERY IMPORTANT
  createInvestment
);

// ✅ My investments
router.get(
  "/my",
  authMiddleware,
  roleMiddleware("INVESTOR"),
  getMyInvestments
);

// Public
router.get("/project/:projectId", getProjectPublicInvestments);

// Admin
router.get(
  "/admin/:projectId",
  authMiddleware,
  roleMiddleware("ADMIN", "CREATOR"),
  getProjectFullInvestments
);

export default router;