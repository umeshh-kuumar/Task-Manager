import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import DashboardLayout from '../../components/layouts/DashboardLayout'

const viewTaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  const getStatusTagColor = (status) => {
    switch (status) {
      case "In Progress":
        return "text-cyan-500 bg-cyan-50 border border-cyan-500/10";
      case "Completed":
        return "text-lime-500 bg-lime-50 border border-lime-500/10";
      default:
        return "text-violet-500 bg-violet-50 border border-violet-500/10";
    }
  };

  //get task  info by Id
  const getTaskDetailsById = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_TASK_BY_ID(id));

      if (response.data) {
        const taskInfo = response.data;
        setTask(taskInfo);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // handle todo check
  const updateTodoChecklist = async () => { };

  // handle attachment link click
  const handleLinkClick = async (link) => {
    window.open(link, "_blank");
  };

  useEffect(() => {
    getTaskDetailsById();
    return () => { };
  }, [id]);

  return (
    <DashboardLayout activeMenu="Manage Tasks">
      <div className=''>
        <div className=''>
          <div className=''>
            <div className=''>
              <h2 className=''>
                {task?.title}
              </h2>

              <div
                className={`text-[13px] font-medium ${getStatusTagColor(
                  task?.status
                )} px-4 py-0.5 rounded`}
              >
                {task?.status}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export default viewTaskDetails