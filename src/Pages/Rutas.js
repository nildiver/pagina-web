import React from 'react'
import {Home} from './Home'
import {Detail} from './Detail/index'
import { BrowserRouter , Routes,Route,} from 'react-router-dom'
import { Register } from './Register/index'
import {Login} from './Login/index'
import {Booking} from './Booking/index'

export const Rutas = () =>(
    <BrowserRouter>
  <Routes>
   
    <Route exact path='/' element={ <Home  />}/>
    <Route path='Detail/:id' element={<Detail />}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Register' element={<Register/>}/>
    <Route path='/Booking' element={<Booking/>}/>
  </Routes>
  </BrowserRouter>
)