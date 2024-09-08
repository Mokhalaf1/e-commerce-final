import React from 'react'
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';



export default function () {
  return (
   
<div className='w-full '>

<Navbar> </Navbar>

<Outlet/>

</div>
     
  )
}
