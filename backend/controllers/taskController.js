const Task = require("../models/Task");

// @desc Get all tasks for dashboard (Admin: all, User: only assigned tasks)
// @route GET /api/tasks/
// @access Private (Admin)
const getTasks = async (req, res) => {
  try {
    let tasks;
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get task by ID
// @route   POST /api/tasks/:id
// @access  Private
const getTaskById = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Create a new task (Admin only)
// @route   POST /api/tasks/
// @access  Private (Admin)
const createTask = async (req, res) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachements,
      todoCheckList,
    } = req.body;

    if (!Array.isArray(assignedTo) || assignedTo.length === 0) {
      return res
        .status(400)
        .json({ message: "assignedTo must be a non-empty array of user IDs" });
    }

    const task = new Task({
      title,
      description,
        priority,
        dueDate,
        assignedTo,
        createdBy: req.user._id,
        todoCheckList,
        attachements,
    });

    res.status(201).json({ message: "Task created successfully", task });

  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update task details
// @route   PUT /api/tasks/:id
// @access  Private

const updateTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Delete a task (Admin only)
// @route   DELETE /api/tasks/:id
// @access  Private (Admin)
const deleteTask = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update task status
// @route   PATCH /api/tasks/:id/status
// @access  Private
const updateTaskStatus = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Update task checklist
// @route   PATCH /api/tasks/:id/todo
// @access  Private
const updateTaskChecklist = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Dashboard Data (Admin only)
// @route   GET /api/tasks/dashboard-data
// @access  Private
const getDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Dashboard Data (User-specific)
// @route   GET /api/tasks/dashboard-data/user
// @access  Private
const getUserDashboardData = async (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  updateTaskStatus,
  updateTaskChecklist,
  getDashboardData,
  getUserDashboardData,
};
