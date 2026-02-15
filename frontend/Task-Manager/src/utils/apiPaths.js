export const BASE_URL = "http://localhost:8000";

// utils/apiPaths.js
export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Register a new user (Admin or Member)
    LOGIN: "/api/auth/login", //Authenticate user and return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },

  USERS: {
    GET_ALL_USERS: "/api/users", // Get all users (Admin only)
    GET_USER_BY_ID: (userId) => `/api/users/${userId}`, // Get user details by ID (Admin only)
    CREATE_USER: "/api/users", // Create a new user (Admin only)
    UPDATE_USER: (userId) => `/api/users/${userId}`, // Update user details (Admin only)
    DELETE_USER: (userId) => `/api/users/${userId}`, // Delete a user (Admin only)
  },

  TASKS: {
    GET_DASHBOARD_DATA: "/api/tasks/dashboard-data", // Get dashboard data
    GET_USER_DASHBOARD_DATA: "/api/tasks/user-dashboard-data", // Get user-specific dashboard data (Member only)
    GET_ALL_TASKS: "/api/tasks", // Get all tasks (Admin and Member)
    GET_TASK_BY_ID: (taskId) => `/api/tasks/${taskId}`, // Get task details by ID (Admin and Member)
    CREATE_TASK: "/api/tasks", // Create a new task (Admin only)
    UPDATE_TASK: (taskId) => `/api/tasks/${taskId}`, // Update task details
    DELETE_TASK: (taskId) => `/api/tasks/${taskId}`, // Delete a task (Admin only)

    UPDATE_TASK_STATUS: (taskId) => `/api/tasks/${taskId}/status`, // Update task status (Admin and Member)
    UPDATE_TODO_CHECKLIST: (taskId) => `/api/tasks/${taskId}/todo`, // Update todo checklist items (Admin and Member)
  },

  REPORTS: {
    EXPORT_TASKS: "/api/reports/export/tasks", // Download all tasks as an Excel file (Admin only)
    EXPORT_USERS: "/api/reports/export/users", // Download all user-task as an Excel file (Admin only)
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload an image and return its URL
  },
};
