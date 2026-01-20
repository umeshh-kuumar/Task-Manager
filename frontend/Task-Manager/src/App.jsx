import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard'
import Login from './pages/Auth/login'
import SignUp from './pages/Auth/signup'
import ManageTasks from './pages/Admin/ManageTasks'
import ManageUsers from './pages/Admin/ManageUsers'
import CreateTask from './pages/Admin/CreateTask'

import UserDashboard from './pages/User/userDashboard'
import MyTasks from './pages/User/MyTasks'
import ViewTaskDetails from './pages/User/viewTaskDetails'

import PrivateRoute from './routes/PrivateRoute'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Default route: redirect "/" to "/login" to avoid 'No routes matched location "/"' */}
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Admin Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />} >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/tasks' element={< ManageTasks />} />
            <Route path='/admin/create-task' element={<CreateTask />} />
            <Route path='/admin/users' element={<ManageUsers />} />
          </Route>

          {/* User Routes*/}
          <Route element={<PrivateRoute allowedRoles={["admin"]} />} >
            <Route path='/user/dashboard' element={<UserDashboard/>} />
            <Route path='/user/my-tasks' element={<MyTasks/>} />
            <Route path='/user/task-details/:id' element={<ViewTaskDetails/>} />
          </Route>
        </Routes>
      </Router>
    </div >
  )
}

export default App