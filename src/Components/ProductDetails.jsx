import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { cartContext } from '../context/cartContext'
import Categories from './Categories';


export default function ProductDetails() {

 let {addProductToCart}= useContext(cartContext);
  
  let {id} =useParams()

  console.log(id)

  const trimmedId = id.trim();

  const[details,setDetails]=useState(null)

  async  function addProductItem(id){
    let response= await addProductToCart(id)
   console.log(response);
   }

    function getProductDetails(){

  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${trimmedId}`)
    

    .then(({data})=>{
console.log(data.data)
setDetails(data.data)
    })
    .catch(()=>{

      console.log('err.response.data.message');
    })
  }


  
  useEffect(()=>{

    getProductDetails()
  },[])
  return (

   <>
    <div className='row'>
     
     <div className='w-1/4'>
     
     <img src={details?.imageCover} alt={details?.title}  className='w-full'/>
     
     <p>{details?.category.name}</p>
     </div>
     
     <div>
     <h1 className='text-xl font-semibold text-slate-500'>
     
     {details?.title}
     
     </h1>
     
     <p>{details?.description} </p>
     
     
     </div> 
     
     <button onClick={()=>{addProductItem(details?.id)}} className='bg-green-800 text-white w-1/2 py-5 text-xl'>Add To Cart</button> 
     
         </div>

         <Categories categoryName={details?.category.name}></Categories>
   </>
  )
}
