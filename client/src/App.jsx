import React from 'react'
import { Routes, Route, useMatch } from 'react-router-dom'
import Home from './pages/student/Home.jsx'
import CourseList from './pages/student/CourseList'
import CourseDetails from './pages/student/CourseDetails'
import MyEnrollments from './pages/student/MyEnrollments'
import Player from './pages/student/Player'
import Loading from './components/students/Loading.jsx'
import Educator from './pages/educator/Educator.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import MyCourses from './pages/educator/MyCourses.jsx'
import AddCourse from './pages/educator/AddCourse.jsx'
import StudentsEnrolled from './pages/educator/StudentsEnrolled.jsx'
import Navbar from './components/students/Navbar.jsx'
const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
      <Routes>
        {/*Routes for student*/}        
        <Route path='/' element={<Home/>} />
        <Route path='/course-list' element={<CourseList/>} />
        <Route path='/course-list/:input' element={<CourseList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollents' element={<MyEnrollments/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />
        {/* Routes for educator */}
        <Route path='/educator' element={<Educator/>}>
          <Route path='educator' element={<Dashboard/>} />
          <Route path='my-courses' element={<MyCourses/>} />
          <Route path='add-course' element={<AddCourse/>} />
          <Route path='student-enrolled' element={<StudentsEnrolled/>} />
        </Route>
        
      </Routes>
    </div>
  )
}

export default App
