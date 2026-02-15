import React from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'

const userDashboard = () => {
  useUserAuth();
  return (
    <div>userDashboard</div>
  )
}

export default userDashboard