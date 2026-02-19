import React, { useState } from 'react'
import DashboardLayout from '../../components/layouts/DashboardLayout'
import { PRIORITY_DATA } from '../../utils/data';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateTask = () => {

  const location = useLocation();
  const { taskId } = location.state || {};
  const navigate = useNavigate();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: null,
    assignedTo: [],
    todoChecklist: [],
    attachments: [],
  });

  const [currentTask, setCurrentTask] = useState(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleValueChange = (key, value) => {
    setTaskData((prevData) => ({
      ...prevData,
      [key]: value
    }));
  };

  const clearData = () => {
    setTaskData({
      title: "",
      description: "",
      priority: "Low",
      dueDate: null,
      assignedTo: [],
      todoChecklist: [],
      attachments: [],
    });
  };

  // Create Task
  const createTask = async () => {};

  // Update Task
  const updateTask = async () => {};

  const handleSubmit = async (e) => {};

  //get Task info by ID
  const getTaskDetailsByID = async (id) => {};

  // Delete Task
  const deleteTask = async () => {};

  return (
    <DashboardLayout activeMenu="Create Task">
    </DashboardLayout>
  )
}

export default CreateTask