import React from 'react'
import img from '../../assets/AuthLayouts.jpg'

const AuthLayouts = ({ children }) => {
  return (
    <div className='flex'>
      <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'>
        <h2 className='text-lg font-medium text-black'>Task Manager</h2>
        {children}
      </div>

      <div className='hidden md:flex w-[40vw] bg-blue-100 justify-center items-center'>
        <img src={img} className='w-fit' />
      </div>
    </div>
  )
}

export default AuthLayouts