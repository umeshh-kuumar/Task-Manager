const express = require("express");
const { protect, adminOnly } = require("../middlewares/authMiddleware");
const { get } = require("mongoose");
const { getDashboardData, getUserDashboardData, getTasks, getTaskById, createTask, updateTask, deleteTask, updateTaskStatus, updateTaskChecklist } = require("../controllers/taskController");

const router = express.Router();

// Task Management Routes
router.get("/dashboard-data", protect, getDashboardData);
router.get("/user-dashboard-data", protect, getUserDashboardData);
router.get("/", protect, getTasks); // Get all tasks (Admin: all , User: Assigned to them)
router.get("/:id", protect, getTaskById); // Get task by ID (Admin: any , User: only if assigned)
router.post("/", protect,adminOnly, createTask); // Create a task (Admin only)
router.put("/:id", protect, updateTask); // Update a task
router.delete("/:id", protect, adminOnly, deleteTask); //delete a task (Admin only)
router.put("/:id/status", protect, updateTaskStatus); // Update task status
router.put("/:id/todo", protect, updateTaskChecklist); // Update task checklist

module.exports = router;