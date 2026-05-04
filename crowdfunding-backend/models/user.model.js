// // import mongoose from "mongoose";

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: { type: String, required: true },
// //     email: { type: String, required: true, unique: true },
// //     password: { type: String, required: true },
// //     role: {
// //       type: String,
// //       enum: ["INVESTOR", "CREATOR", "ADMIN"],
// //       default: "INVESTOR",
// //     },
// //     isKYCVerified: { type: Boolean, default: false },
// //   },
// //   { timestamps: true }
// // );

// // export default mongoose.model("User", userSchema);
//////import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },

//     role: {
//       type: String,
//       enum: ["INVESTOR", "CREATOR", "ADMIN"],
//       default: "INVESTOR",
//     },

//     // 🔥 NEW FIELDS
//     experience: String,
//     college: String,
//     course: String,

//     aadhaar: String,
//     pan: String,
//     studentId: String,

//     isKYCVerified: { type: Boolean, default: false },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("User", userSchema);
import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["INVESTOR", "CREATOR", "ADMIN"],
      default: "INVESTOR",
    },

    experience: String,
    college: String,
    course: String,

    aadhaar: String,
    pan: String,
    studentId: String,

    // ✅ FIXED
    isKYCVerified: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false }, // 🔥 ADD THIS
  },
  { timestamps: true }
);
export default mongoose.model("User", userSchema);