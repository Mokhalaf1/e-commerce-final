import React from 'react'
import {Circles} from 'react-loader-spinner'



export default function loader() {
  return (
    
  <div className='flex h-screen justify-center items-center'> 
  
  <Circles
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  />
  
 </div>
  
  )
}
