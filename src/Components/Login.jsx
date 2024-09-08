import React, { useContext, useState } from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../context/userContext';



export default function Login() {

  let {setLogin} = useContext(userContext)

  let navigate = useNavigate();

  const [apiError,setError] = useState('');
  const [isLoading,setLoading] = useState(false);

  function handleRegister(values){

setLoading(true)

    axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)

    .then((values)=>{console.log('success',values)


      if(values.data.message == 'success'){

        
        localStorage.setItem('userToken', values?.data?.token)
        setLogin(values?.data?.token)
setLoading(false)
navigate('/home')
  }
    }
  
  
  )
    .catch((error)=>{console.log('error', values.data.message)

setLoading(false)
  setError(values.data.message) 
  })

    

    console.log('register', values)
  }
 
  let validationSchema= Yup.object({

    email: Yup.string().email().required('Email is required please'),
    password: Yup.string().matches(/^[A-Z][0-9]{5,10}$/).required('Password is required') 
    

  
    
  })

 let formik= useFormik({

  initialValues:{

email:'',
password:'',


  },

validationSchema,

  onSubmit: handleRegister
  })








  return (
    <div className='mt-20'>
     <form className="max-w-sm mx-auto" onSubmit= {formik.handleSubmit}>


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

  
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">  Login </button>
  {isLoading? <i FontAwesomeIcon className='fa fa-spinner fa-spin m-3 text-red-800'></i>: null }
  
</form>
    </div>
  )
}
