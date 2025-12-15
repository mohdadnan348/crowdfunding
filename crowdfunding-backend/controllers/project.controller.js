import Project from "../models/project.model.js";

/**
 * @desc    Create new project (Creator)
 * @route   POST /api/projects
 * @access  Private (Creator)
 */
export const createProject = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      targetAmount,
      deadline,
    } = req.body;

    const project = await Project.create({
      creatorId: req.user.id,
      title,
      description,
      category,
      targetAmount,
      deadline,
      status: "DRAFT",
    });

    res.status(201).json({
      success: true,
      message: "Project created (Draft)",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Update project (Creator)
 * @route   PUT /api/projects/:id
 * @access  Private (Creator)
 */
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, creatorId: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project updated",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Publish project (Admin approval)
 * @route   PUT /api/projects/:id/publish
 * @access  Admin
 */
export const publishProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      { status: "ACTIVE" },
      { new: true }
    );

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      message: "Project published",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get all active projects (Public)
 * @route   GET /api/projects
 * @access  Public
 */
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({ status: "ACTIVE" })
      .populate("creatorId", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get single project details
 * @route   GET /api/projects/:id
 * @access  Public
 */
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate("creatorId", "name email");

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Get creator's own projects
 * @route   GET /api/projects/my
 * @access  Private (Creator)
 */
export const getMyProjects = async (req, res) => {
  try {
    const projects = await Project.find({ creatorId: req.user.id })
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
