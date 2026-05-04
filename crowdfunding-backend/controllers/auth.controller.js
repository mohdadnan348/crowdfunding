// // import bcrypt from "bcryptjs";
// // import jwt from "jsonwebtoken";
// // import User from "../models/user.model.js";

// // // 🔐 Generate JWT Token
// // const generateToken = (user) => {
// //   return jwt.sign(
// //     {
// //       id: user._id,
// //       role: user.role,
// //     },
// //     process.env.JWT_SECRET,
// //     { expiresIn: "7d" }
// //   );
// // };

// // /**
// //  * @desc    Register new user
// //  * @route   POST /api/auth/register
// //  * @access  Public
// //  */
// // export const register = async (req, res) => {
// //   try {
// //     const { name, email, password, role } = req.body;

// //     // Check user already exists
// //     const existingUser = await User.findOne({ email });
// //     if (existingUser) {
// //       return res.status(400).json({ message: "User already exists" });
// //     }

// //     // Hash password
// //     const salt = await bcrypt.genSalt(10);
// //     const hashedPassword = await bcrypt.hash(password, salt);

// //     // Create user
// //     const user = await User.create({
// //       name,
// //       email,
// //       password: hashedPassword,
// //       role: role || "INVESTOR",
// //     });

// //     // Generate token
// //     const token = generateToken(user);

// //     res.status(201).json({
// //       success: true,
// //       message: "User registered successfully",
// //       token,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         role: user.role,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Login user
// //  * @route   POST /api/auth/login
// //  * @access  Public
// //  */
// // export const login = async (req, res) => {
// //   try {
// //     const { email, password } = req.body;

// //     // Check user exists
// //     const user = await User.findOne({ email });
// //     if (!user) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Compare password
// //     const isMatch = await bcrypt.compare(password, user.password);
// //     if (!isMatch) {
// //       return res.status(400).json({ message: "Invalid credentials" });
// //     }

// //     // Generate token
// //     const token = generateToken(user);

// //     res.status(200).json({
// //       success: true,
// //       message: "Login successful",
// //       token,
// //       user: {
// //         id: user._id,
// //         name: user.name,
// //         email: user.email,
// //         role: user.role,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

// // 🔐 Generate Token
// const generateToken = (user) => {
//   return jwt.sign(
//     {
//       id: user._id,
//       role: user.role,
//     },
//     process.env.JWT_SECRET,
//     { expiresIn: "7d" }
//   );
// };

// // ✅ REGISTER
// export const register = async (req, res) => {
//   try {
//     const {
//       name,
//       email,
//       password,
//       role,
//       experience,
//       college,
//       course,
//     } = req.body;

//     // FILES
//     const aadhaar = req.files?.aadhaar?.[0]?.filename;
//     const pan = req.files?.pan?.[0]?.filename;
//     const studentId = req.files?.studentId?.[0]?.filename;

//     // Check user exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists" });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const user = await User.create({
//       name,
//       email,
//       password: hashedPassword,
//       role: role || "INVESTOR",

//       experience: role === "INVESTOR" ? experience : null,
//       college: role === "CREATOR" ? college : null,
//       course: role === "CREATOR" ? course : null,

//       aadhaar,
//       pan,
//       studentId: role === "CREATOR" ? studentId : null,
//     });

//     const token = generateToken(user);

//     res.status(201).json({
//       success: true,
//       message: "User registered successfully",
//       token,
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // ✅ LOGIN (unchanged)
// export const login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials" });
//     }

//     const token = generateToken(user);

//     res.status(200).json({
//       success: true,
//       message: "Login successful",
//       token,
//       user,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// 🔐 Generate Token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );
};

// ✅ REGISTER
export const register = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      role,
      experience,
      college,
      course,
    } = req.body;

    // 🔴 Basic Validation
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All required fields missing" });
    }

    // 📁 FILES (safe access)
    const aadhaar = req.files?.aadhaar?.[0]?.filename || null;
    const pan = req.files?.pan?.[0]?.filename || null;
    const studentId = req.files?.studentId?.[0]?.filename || null;

    // 🔍 Check user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // 🔐 Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 👤 Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "INVESTOR",

      experience: role === "INVESTOR" ? experience : null,
      college: role === "CREATOR" ? college : null,
      course: role === "CREATOR" ? course : null,

      aadhaar,
      pan,
      studentId: role === "CREATOR" ? studentId : null,
    });

    // 🎟 Token
    const token = generateToken(user);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
      user,
    });

  } catch (error) {
    console.error("REGISTER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ LOGIN
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 🔴 Validation
    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    // 🔍 Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🔐 Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // 🎟 Token
    const token = generateToken(user);

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user,
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};