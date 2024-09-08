import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';

  



export default function Register() {

  let {setLogin} = useContext(userContext)
  let navigate = useNavigate();

  const [apiError,setError] = useState('');
  const [isLoading,setLoading] = useState(false);

  function handleRegister(values){

setLoading(true)

    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)

    .then((values)=>{console.log('success',values)


      if(values.data.message == 'success'){

        localStorage.setItem('userToken', values.data.token)
        setLogin(values.data.token)
setLoading(false)
navigate('/login')
  }
    }
  
  
  )
    .catch((error)=>{console.log('error', error.response.data.message)

setLoading(false)
  setError(error.response.data.message) 
  })

    

    console.log('register', values)
  }
 
  let validationSchema= Yup.object({

    name:Yup.string().min(2,'min length is 2').max(10,'max is 10').required('name is required please'),
    email: Yup.string().email().required('Email is required please'),
    password: Yup.string().matches(/^[A-Z][0-9]{5,10}$/).required('Password is required'),  
    rePassword: Yup.string().oneOf([Yup.ref('password')]).required('password is not matching'),
    phone:Yup.string().matches(/^01[0-25][0-9]{8}$/)

  
    
  })

 let formik= useFormik({

  initialValues:{
name:'',
email:'',
password:'',
rePassword:'',
phone:''

  },

validationSchema,

  onSubmit: handleRegister
  })




  return (
    
    <div>
      
       {apiError? <div>{apiError}</div>:null}
<form className="max-w-sm mx-auto" onSubmit= {formik.handleSubmit}>

<div className="mb-5 mt-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id="name" name='name' value={formik.values.name} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    {formik.errors.name && formik.touched.name && <div>{formik.errors.name}</div>
}</div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
    <input  onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id="email" name='email' value={formik.values.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com"  />
    {formik.errors.email && formik.touched.email && <div>{formik.errors.email}</div>
  }</div>

  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="password" name='password' value={formik.values.password} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    {formik.errors.password && formik.touched.password && <div>{formik.errors.password}</div>
  } </div>
  <div className="mb-5">
    <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" name='rePassword' value={formik.values.rePassword} id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    {formik.errors.rePassword && formik.touched.rePassword && <div>{formik.errors.rePassword}</div>
  } </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
    <input onBlur={formik.handleBlur} onChange={formik.handleChange}  type="text" name='phone' value={formik.values.phone} id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
    {formik.errors.phone && formik.touched.phone && <div>{formik.errors.phone}</div>
  }  </div>
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  Submit</button>

  
</form>



    </div>

    
  )
}
