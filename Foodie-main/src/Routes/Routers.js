import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import AllFoods from '../Pages/AllFoods'
import FoodDetails from '../Pages/FoodDetails'
import Cart from '../Pages/Cart'
import Checkout from '../Pages/Checkout'
import Login from '../Pages/Login'
import Register from '../Pages/Register'
import ProtectedRoute from './utills/ProtectedRoute'

const Routers = () => {
  return <Routes>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/register' element={<Register></Register>}></Route>
    <Route path='/' element={<ProtectedRoute />}>
      <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/foods' element={<AllFoods></AllFoods>}></Route>
      <Route path='/foods/:id' element={<FoodDetails></FoodDetails>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/checkout' element={<Checkout></Checkout>}></Route>
    </Route>
  </Routes>
}

export default Routers
