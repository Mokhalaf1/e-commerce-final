import React, { useContext } from 'react'
import  fCart  from '../assets/fCart.jpg'
import  freshCart  from '../assets/freshCart.png'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../context/userContext'





export default function Navbar() {

let navigate= useNavigate()

  let {isLogin,setLogin}= useContext(userContext)


function logOut(){

localStorage.removeItem('userToken');

setLogin(null);
navigate('/login')
}

  return (
    
    <div className="container bg-slate-500" >
     

<nav className= "  ">
  <div className=" flex flex-wrap items-center justify-between  w-full m-0 ">
    <Link href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={freshCart} className=" w-20 h-20  " alt="Flowbite Logo" />
        
    </Link>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
           
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto container" id="navbar-default">

      {isLogin?
      
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <Link to="Home" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
      </li>
      <li>
        <Link to="Cart" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Cart</Link>
      </li>
      <li>
        <Link to="Wishlist" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Wishlist</Link>
      </li>
      
      <li>
      <Link to="Products" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Products</Link>
      </li>
      
      <li>
      <Link to="Brand" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Brands</Link>
      </li>

      

    </ul>: null
    
    
    
    }
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
        {!isLogin? 
        
        <>
        <li>
        <Link to="Login" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Login</Link>
        </li>

        <li>
        <Link to="Register" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Register</Link>
        </li>

        </>: 

<li>
<span onClick={()=>{logOut()}} className="block py-2 px-3 cursor-pointer text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Logout</span>
</li>
      }
      
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
