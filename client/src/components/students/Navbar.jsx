import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const isCourseListPage = location.pathname.includes('/course-list')
  return (
    <div className={`flex items-center justify-between border-b border-gray-500 py-4 px-4 sm:px-10 md:px-14 lg:px-36 ${isCourseListPage ? 'bg-white':'bg-cyan-100/70'}`}>
      <img src={assets.logo} alt="" className='w-28 lg:w-32 cursor-pointer'/>
      <div className='hidden md:flex items-center gap-5 text-gray-500'>
          <div className='flex items-center gap-4'>
            <button >Become Educator</button>
            |
            <Link to="/my-enrollments"> My Enrollments</Link>
          </div>
          <button className='bg-blue-600 px-5 py-2 rounded-full text-white '>Create account</button>
      </div>
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
          <div className='flex items-center gap-2'>
          <button >Become Educator</button>
            |
            <Link to="/my-enrollments"> My Enrollments</Link>
            <button><img src={assets.user_icon} alt="" /></button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
