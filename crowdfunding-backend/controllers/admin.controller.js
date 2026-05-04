// // import User from "../models/user.model.js";
// // import Project from "../models/project.model.js";
// // import Investment from "../models/investment.model.js";

// // /**
// //  * @desc    Get admin dashboard stats
// //  * @route   GET /api/admin/dashboard
// //  * @access  Admin
// //  */
// // export const getDashboardStats = async (req, res) => {
// //   try {
// //     const totalUsers = await User.countDocuments();
// //     const totalProjects = await Project.countDocuments();
// //     const activeProjects = await Project.countDocuments({ status: "ACTIVE" });

// //     const totalInvestments = await Investment.aggregate([
// //       { $match: { status: "SUCCESS" } },
// //       { $group: { _id: null, total: { $sum: "$amount" } } },
// //     ]);

// //     res.status(200).json({
// //       success: true,
// //       data: {
// //         totalUsers,
// //         totalProjects,
// //         activeProjects,
// //         totalFundRaised: totalInvestments[0]?.total || 0,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get all projects (Admin)
// //  * @route   GET /api/admin/projects
// //  * @access  Admin
// //  */
// // export const getAllProjectsAdmin = async (req, res) => {
// //   try {
// //     const projects = await Project.find()
// //       .populate("creatorId", "name email")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Approve / Reject project
// //  * @route   PUT /api/admin/projects/:id/status
// //  * @access  Admin
// //  */
// // export const updateProjectStatus = async (req, res) => {
// //   try {
// //     const { status } = req.body; // ACTIVE / FAILED

// //     const project = await Project.findByIdAndUpdate(
// //       req.params.id,
// //       { status },
// //       { new: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({ message: "Project not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "Project status updated",
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get all users (Admin)
// //  * @route   GET /api/admin/users
// //  * @access  Admin
// //  */
// // export const getAllUsersAdmin = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");

// //     res.status(200).json({
// //       success: true,
// //       count: users.length,
// //       data: users,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Block / Unblock user
// //  * @route   PUT /api/admin/users/:id/block
// //  * @access  Admin
// //  */
// // export const toggleUserBlock = async (req, res) => {
// //   try {
// //     const { isBlocked } = req.body;

// //     const user = await User.findByIdAndUpdate(
// //       req.params.id,
// //       { isBlocked },
// //       { new: true }
// //     ).select("-password");

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: "User status updated",
// //       data: user,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    View full investment details of a project
// //  * @route   GET /api/admin/investments/:projectId
// //  * @access  Admin
// //  */
// // export const getProjectInvestmentsAdmin = async (req, res) => {
// //   try {
// //     const investments = await Investment.find({
// //       projectId: req.params.projectId,
// //     })
// //       .populate("investorId", "name email")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: investments.length,
// //       data: investments,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// // import User from "../models/user.model.js";
// // import Project from "../models/project.model.js";
// // import Investment from "../models/investment.model.js";

// // /**
// //  * @desc    Get admin dashboard stats
// //  * @route   GET /api/admin/dashboard
// //  * @access  Admin
// //  */
// // export const getDashboardStats = async (req, res) => {
// //   try {
// //     // Parallel execution for faster response
// //     const [
// //       totalUsers,
// //       totalProjects,
// //       activeProjects,
// //       draftProjects,
// //       cancelledProjects,
// //       completedProjects,
// //       totalInvestments
// //     ] = await Promise.all([
// //       User.countDocuments(),
// //       Project.countDocuments(),
// //       Project.countDocuments({ status: "ACTIVE" }),
// //       Project.countDocuments({ status: "DRAFT" }),
// //       Project.countDocuments({ status: "FAILED" }), // Frontend uses "Cancelled" for FAILED
// //       Project.countDocuments({ status: "COMPLETED" }),
// //       Investment.aggregate([
// //         { $match: { status: "SUCCESS" } },
// //         { $group: { _id: null, total: { $sum: "$amount" } } },
// //       ])
// //     ]);

// //     res.status(200).json({
// //       success: true,
// //       data: {
// //         totalUsers,
// //         totalProjects,
// //         activeProjects,
// //         draftProjects,
// //         cancelledProjects, // Matches stats.cancelledProjects in frontend
// //         completedProjects,
// //         totalFundRaised: totalInvestments[0]?.total || 0,
// //       },
// //     });
// //   } catch (error) {
// //     res.status(500).json({ success: false, message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get all projects (Admin)
// //  */
// // export const getAllProjectsAdmin = async (req, res) => {
// //   try {
// //     const projects = await Project.find()
// //       .populate("creatorId", "name email")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: projects.length,
// //       data: projects,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Approve / Reject project
// //  */
// // export const updateProjectStatus = async (req, res) => {
// //   try {
// //     const { status } = req.body; 

// //     const project = await Project.findByIdAndUpdate(
// //       req.params.id,
// //       { status },
// //       { new: true }
// //     );

// //     if (!project) {
// //       return res.status(404).json({ message: "Project not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: `Project status updated to ${status}`,
// //       data: project,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Get all users (Admin)
// //  */
// // export const getAllUsersAdmin = async (req, res) => {
// //   try {
// //     const users = await User.find().select("-password");

// //     res.status(200).json({
// //       success: true,
// //       count: users.length,
// //       data: users,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    Block / Unblock user
// //  */
// // export const toggleUserBlock = async (req, res) => {
// //   try {
// //     const { isBlocked } = req.body;

// //     const user = await User.findByIdAndUpdate(
// //       req.params.id,
// //       { isBlocked },
// //       { new: true }
// //     ).select("-password");

// //     if (!user) {
// //       return res.status(404).json({ message: "User not found" });
// //     }

// //     res.status(200).json({
// //       success: true,
// //       message: isBlocked ? "User blocked" : "User unblocked",
// //       data: user,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };

// // /**
// //  * @desc    View full investment details
// //  */
// // export const getProjectInvestmentsAdmin = async (req, res) => {
// //   try {
// //     const investments = await Investment.find({
// //       projectId: req.params.projectId,
// //     })
// //       .populate("investorId", "name email")
// //       .sort({ createdAt: -1 });

// //     res.status(200).json({
// //       success: true,
// //       count: investments.length,
// //       data: investments,
// //     });
// //   } catch (error) {
// //     res.status(500).json({ message: error.message });
// //   }
// // };
// import User from "../models/user.model.js";
// import Project from "../models/project.model.js";
// import Investment from "../models/investment.model.js";

// /**
//  * @desc    Get admin dashboard stats
//  * @route   GET /api/admin/dashboard
//  * @access  Admin
//  */
// export const getDashboardStats = async (req, res) => {
//   try {
//     const [
//       totalUsers,
//       totalProjects,
//       activeProjects,
//       draftProjects,
//       cancelledProjects,
//       completedProjects,
//       totalInvestments
//     ] = await Promise.all([
//       User.countDocuments(),
//       Project.countDocuments(),
//       Project.countDocuments({ status: "ACTIVE" }),
//       Project.countDocuments({ status: "DRAFT" }),
//       Project.countDocuments({ status: "FAILED" }),
//       Project.countDocuments({ status: "COMPLETED" }),
//       Investment.aggregate([
//         { $match: { status: "SUCCESS" } },
//         { $group: { _id: null, total: { $sum: "$amount" } } },
//       ])
//     ]);

//     res.status(200).json({
//       success: true,
//       data: {
//         totalUsers,
//         totalProjects,
//         activeProjects,
//         draftProjects,
//         cancelledProjects,
//         completedProjects,
//         totalFundRaised: totalInvestments[0]?.total || 0,
//       },
//     });
//   } catch (error) {
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// /**
//  * @desc    Get all projects (Admin)
//  */
// export const getAllProjectsAdmin = async (req, res) => {
//   try {
//     const projects = await Project.find()
//       .populate("creatorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Approve / Reject project
//  */
// export const updateProjectStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({ message: "Project not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: `Project status updated to ${status}`,
//       data: project,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Get all users (Admin) + 🔥 FILE URL SUPPORT
//  */
// export const getAllUsersAdmin = async (req, res) => {
//   try {
//     // 🔒 Admin check
//     if (req.user.role !== "ADMIN") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const users = await User.find().select("-password");

//     // 🔥 Add file URLs
//     const updatedUsers = users.map((user) => ({
//       ...user._doc,

//       aadhaarUrl: user.aadhaar
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.aadhaar}`
//         : null,

//       panUrl: user.pan
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.pan}`
//         : null,

//       studentIdUrl: user.studentId
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.studentId}`
//         : null,
//     }));

//     res.status(200).json({
//       success: true,
//       count: updatedUsers.length,
//       data: updatedUsers,
//     });

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Block / Unblock user
//  */
// export const toggleUserBlock = async (req, res) => {
//   try {
//     const { isBlocked } = req.body;

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { isBlocked },
//       { new: true }
//     ).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: isBlocked ? "User blocked" : "User unblocked",
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    View full investment details
//  */
// export const getProjectInvestmentsAdmin = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       projectId: req.params.projectId,
//     })
//       .populate("investorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: investments.length,
//       data: investments,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// import User from "../models/user.model.js";
// import Project from "../models/project.model.js";
// import Investment from "../models/investment.model.js";

// /**
//  * @desc    Get admin dashboard stats
//  * @route   GET /api/admin/dashboard
//  * @access  Admin
//  */
// export const getDashboardStats = async (req, res) => {
//   try {
//     const [
//       totalUsers,
//       totalProjects,
//       activeProjects,
//       draftProjects,
//       cancelledProjects,
//       completedProjects,
//       totalInvestments
//     ] = await Promise.all([
//       User.countDocuments(),
//       Project.countDocuments(),
//       Project.countDocuments({ status: "ACTIVE" }),
//       Project.countDocuments({ status: "DRAFT" }),
//       Project.countDocuments({ status: "FAILED" }),
//       Project.countDocuments({ status: "COMPLETED" }),
//       Investment.aggregate([
//         { $match: { status: "SUCCESS" } },
//         { $group: { _id: null, total: { $sum: "$amount" } } },
//       ])
//     ]);

//     res.status(200).json({
//       success: true,
//       data: {
//         totalUsers,
//         totalProjects,
//         activeProjects,
//         draftProjects,
//         cancelledProjects,
//         completedProjects,
//         totalFundRaised: totalInvestments[0]?.total || 0,
//       },
//     });
//   } catch (error) {
//     console.error("DASHBOARD ERROR:", error);
//     res.status(500).json({ success: false, message: error.message });
//   }
// };

// /**
//  * @desc    Get all projects (Admin)
//  */
// export const getAllProjectsAdmin = async (req, res) => {
//   try {
//     const projects = await Project.find()
//       .populate("creatorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: projects.length,
//       data: projects,
//     });
//   } catch (error) {
//     console.error("GET PROJECTS ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Approve / Reject project
//  */
// export const updateProjectStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     const project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!project) {
//       return res.status(404).json({ message: "Project not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: `Project status updated to ${status}`,
//       data: project,
//     });
//   } catch (error) {
//     console.error("UPDATE PROJECT ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Get all users (Admin) + FILE URL SUPPORT
//  */
// export const getAllUsersAdmin = async (req, res) => {
//   try {
//     if (req.user.role !== "ADMIN") {
//       return res.status(403).json({ message: "Access denied" });
//     }

//     const users = await User.find().select("-password");

//     const updatedUsers = users.map((user) => ({
//       ...user._doc,

//       aadhaarUrl: user.aadhaar
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.aadhaar}`
//         : null,

//       panUrl: user.pan
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.pan}`
//         : null,

//       studentIdUrl: user.studentId
//         ? `${req.protocol}://${req.get("host")}/uploads/${user.studentId}`
//         : null,
//     }));

//     res.status(200).json({
//       success: true,
//       count: updatedUsers.length,
//       data: updatedUsers,
//     });

//   } catch (error) {
//     console.error("GET USERS ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Block / Unblock user
//  */
// export const toggleUserBlock = async (req, res) => {
//   try {
//     const { isBlocked } = req.body;

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { isBlocked },
//       { new: true }
//     ).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: isBlocked ? "User blocked" : "User unblocked",
//       data: user,
//     });
//   } catch (error) {
//     console.error("BLOCK USER ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };

// /**
//  * @desc    Verify / Unverify user  ✅ (NEW ADDED)
//  */
// // ✅ VERIFY / UNVERIFY USER
// export const toggleUserVerify = async (req, res) => {
//   try {
//     const { isVerified } = req.body;

//     const user = await User.findByIdAndUpdate(
//       req.params.id,
//       { isKYCVerified: isVerified }, // 🔥 IMPORTANT
//       { new: true }
//     ).select("-password");

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.status(200).json({
//       success: true,
//       message: isVerified ? "User Verified" : "User Unverified",
//       data: user,
//     });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };
// /**
//  * @desc    View full investment details
//  */
// export const getProjectInvestmentsAdmin = async (req, res) => {
//   try {
//     const investments = await Investment.find({
//       projectId: req.params.projectId,
//     })
//       .populate("investorId", "name email")
//       .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: investments.length,
//       data: investments,
//     });
//   } catch (error) {
//     console.error("INVESTMENT ADMIN ERROR:", error);
//     res.status(500).json({ message: error.message });
//   }
// };
import User from "../models/user.model.js";
import Project from "../models/project.model.js";
import Investment from "../models/investment.model.js";
import { sendEmail } from "../utils/sendEmail.js"; // ✅ NEW

/**
 * @desc    Get admin dashboard stats
 */
export const getDashboardStats = async (req, res) => {
  try {
    const [
      totalUsers,
      totalProjects,
      activeProjects,
      draftProjects,
      cancelledProjects,
      completedProjects,
      totalInvestments
    ] = await Promise.all([
      User.countDocuments(),
      Project.countDocuments(),
      Project.countDocuments({ status: "ACTIVE" }),
      Project.countDocuments({ status: "DRAFT" }),
      Project.countDocuments({ status: "FAILED" }),
      Project.countDocuments({ status: "COMPLETED" }),
      Investment.aggregate([
        { $match: { status: "SUCCESS" } },
        { $group: { _id: null, total: { $sum: "$amount" } } },
      ])
    ]);

    res.status(200).json({
      success: true,
      data: {
        totalUsers,
        totalProjects,
        activeProjects,
        draftProjects,
        cancelledProjects,
        completedProjects,
        totalFundRaised: totalInvestments[0]?.total || 0,
      },
    });
  } catch (error) {
    console.error("DASHBOARD ERROR:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/**
 * @desc    Get all projects (Admin)
 */
export const getAllProjectsAdmin = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("creatorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("GET PROJECTS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Approve / Reject project
 */
export const updateProjectStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: `Project status updated to ${status}`,
      data: project,
    });
  } catch (error) {
    console.error("UPDATE PROJECT ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all users (Admin)
 */
export const getAllUsersAdmin = async (req, res) => {
  try {
    if (req.user.role !== "ADMIN") {
      return res.status(403).json({ message: "Access denied" });
    }

    const users = await User.find().select("-password");

    const updatedUsers = users.map((user) => ({
      ...user._doc,
      aadhaarUrl: user.aadhaar
        ? `${req.protocol}://${req.get("host")}/uploads/${user.aadhaar}`
        : null,
      panUrl: user.pan
        ? `${req.protocol}://${req.get("host")}/uploads/${user.pan}`
        : null,
      studentIdUrl: user.studentId
        ? `${req.protocol}://${req.get("host")}/uploads/${user.studentId}`
        : null,
    }));

    res.status(200).json({
      success: true,
      count: updatedUsers.length,
      data: updatedUsers,
    });

  } catch (error) {
    console.error("GET USERS ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * 🔥 BLOCK / UNBLOCK USER + EMAIL
 */
export const toggleUserBlock = async (req, res) => {
  try {
    const { isBlocked } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isBlocked },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ EMAIL SEND
    if (isBlocked) {
      await sendEmail(
        user.email,
        "Account Blocked ❌",
        `Hello ${user.name}, your account has been blocked. You cannot use platform features.`
      );
    } else {
      await sendEmail(
        user.email,
        "Account Unblocked ✅",
        `Hello ${user.name}, your account has been unblocked. You can now access your account.`
      );
    }

    res.status(200).json({
      success: true,
      message: isBlocked ? "User blocked" : "User unblocked",
      data: user,
    });

  } catch (error) {
    console.error("BLOCK USER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * 🔥 VERIFY / UNVERIFY USER + EMAIL
 */
export const toggleUserVerify = async (req, res) => {
  try {
    const { isVerified } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.id,
      { isKYCVerified: isVerified },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // ✅ EMAIL SEND
    if (isVerified) {
      await sendEmail(
        user.email,
        "KYC Verified ✅",
        `Hello ${user.name}, your KYC has been successfully verified. You can now create projects.`
      );
    } else {
      await sendEmail(
        user.email,
        "KYC Rejected ❌",
        `Hello ${user.name}, your KYC verification was rejected. Please re-submit your documents.`
      );
    }

    res.status(200).json({
      success: true,
      message: isVerified ? "User Verified" : "User Unverified",
      data: user,
    });

  } catch (error) {
    console.error("VERIFY USER ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    View full investment details
 */
export const getProjectInvestmentsAdmin = async (req, res) => {
  try {
    const investments = await Investment.find({
      projectId: req.params.projectId,
    })
      .populate("investorId", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: investments.length,
      data: investments,
    });
  } catch (error) {
    console.error("INVESTMENT ADMIN ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};
export const getAnalyticsData = async (req, res) => {
  try {
    const projects = await Project.find();
    const users = await User.find();
    const investments = await Investment.find({ status: "SUCCESS" });

    // 📊 Project Status Count
    const statusData = {
      ACTIVE: 0,
      DRAFT: 0,
      COMPLETED: 0,
      FAILED: 0,
    };

    projects.forEach((p) => {
      statusData[p.status]++;
    });

    // 👥 User Role Count
    const roleData = {
      ADMIN: 0,
      CREATOR: 0,
      INVESTOR: 0,
    };

    users.forEach((u) => {
      roleData[u.role]++;
    });

    // 💰 Investment per project
    const projectFunds = {};

    investments.forEach((inv) => {
      const key = inv.projectId.toString();
      projectFunds[key] = (projectFunds[key] || 0) + inv.amount;
    });

    // 📈 Monthly Trend
    const monthlyData = {};

    investments.forEach((inv) => {
      const month = new Date(inv.createdAt).toLocaleString("default", {
        month: "short",
      });

      monthlyData[month] = (monthlyData[month] || 0) + inv.amount;
    });

    res.json({
      success: true,
      data: {
        statusData,
        roleData,
        projectFunds,
        monthlyData,
      },
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
export const getAdvancedAnalytics = async (req, res) => {
  try {
    const projects = await Project.find();
    const investments = await Investment.find({ status: "SUCCESS" });
    const users = await User.find();

    // 💰 Total Investment
    const totalInvestment = investments.reduce((sum, i) => sum + i.amount, 0);

    // 📊 Avg Investment
    const avgInvestment =
      investments.length > 0 ? totalInvestment / investments.length : 0;

    // 🏆 Top 5 Projects
    const projectMap = {};

    investments.forEach((inv) => {
      const key = inv.projectId.toString();
      projectMap[key] = (projectMap[key] || 0) + inv.amount;
    });

    const topProjects = Object.entries(projectMap)
      .map(([projectId, amount]) => {
        const proj = projects.find((p) => p._id.toString() === projectId);
        return {
          title: proj?.title || "Unknown",
          amount,
        };
      })
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 5);

    // 📊 Category Distribution
    const categoryData = {};
    projects.forEach((p) => {
      categoryData[p.category] = (categoryData[p.category] || 0) + 1;
    });

    // 📈 Monthly Growth %
    const monthly = {};

    investments.forEach((inv) => {
      const m = new Date(inv.createdAt).getMonth();
      monthly[m] = (monthly[m] || 0) + inv.amount;
    });

    const months = Object.values(monthly);
    let growth = 0;

    if (months.length >= 2) {
      const last = months[months.length - 1];
      const prev = months[months.length - 2];
      growth = prev ? ((last - prev) / prev) * 100 : 0;
    }

    // 🧠 Insights
    const insights = [];

    if (growth > 0) insights.push("📈 Platform is Growing Rapidly");
    else insights.push("⚠️ Growth are slow");

    if (avgInvestment > 5000)
      insights.push("💰 High Values Investors are active");
    else insights.push("👥 Small Investor are more");

    if (topProjects.length > 0)
      insights.push(`🔥 Top project: ${topProjects[0].title}`);

    res.json({
      success: true,
      data: {
        totalInvestment,
        avgInvestment,
        topProjects,
        categoryData,
        growth: growth.toFixed(2),
        insights,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};