import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Signup from './signup'
import Login from './login'

const Rout = () => {
  return (
    <Routes>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/login' element={<Login />}></Route>
    </Routes>
  )
}

export default Rout
