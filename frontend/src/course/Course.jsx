import React from 'react'
import Navbar from '../components/Navbar'
import CoursePage from '../components/CoursePage'
import Footer from '../components/Footer'

function Course() {
  return (
    <>
        <Navbar />
        <div className='min-h-screen'>
            <CoursePage />
        </div>
        <Footer />
    </>
  )
}

export default Course
