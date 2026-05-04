// import express from "express";
// import { register, login } from "../controllers/auth.controller.js";

// const router = express.Router();

// router.post("/register", register);
// router.post("/login", login);

// export default router;
import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import upload from "../middlewares/upload.middleware.js";

const router = express.Router();

router.post(
  "/register",
  upload.fields([
    { name: "aadhaar", maxCount: 1 },
    { name: "pan", maxCount: 1 },
    { name: "studentId", maxCount: 1 },
  ]),
  register
);

router.post("/login", login);

export default router;
