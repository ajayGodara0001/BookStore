import React from 'react'
import Home from './home/Home'
import { Navigate, Route, Routes } from   "react-router-dom"
import Course from './course/Course'
import Signup from './components/Signup'
import Login from './components/Login'
import Contact from './components/Contact'

import { isAuthenticated } from './auth/auth'

function App() {
  const yes = isAuthenticated()
  return (
    <div>
    <Routes >
      <Route path='/'element={<Home />} />
      <Route path='/course'element={yes ? <Course />:<Signup />} />
      <Route path='/signup'element={<Signup />} />
      <Route path='/login'element={<Login />} />
      <Route path='/contact'element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
