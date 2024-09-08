import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartContext';






export default function Products() {

  let {addProductToCart} =useContext(cartContext);
  
  const [products, setProducts]= useState([])

  const[isLoading, setLoading]= useState(true)

  async  function addProductItem(id){
    let response= await addProductToCart(id)
   console.log(response);
   }
   
  const getProducts= async ()=>{

    



   
    try{
    let {data}= await axios('https://ecommerce.routemisr.com/api/v1/products')
    
 setLoading(false)

setProducts(data.data)

} catch(error){

  console.log('Error')
  setLoading(false)

}}

useEffect(() => {
getProducts()
})
  return (

 
    <div className="section">

{

!isLoading? 

<div className="row">

{products.map((productInfo) => {
      
      return <div className='w-1/6 px-4 border-2 border-green-600 '> 

      <Link to={`/productDetails/ ${productInfo.id}/${productInfo.category.name}`} >
      <img className='h-fit' src={productInfo.imageCover} alt={productInfo.title} />
      
      <span className=' block text-xl font-light text-green-600'>
      
      {productInfo.category.name}
      </span>
      
      <span className='text-lg font-bold  text-gray-500'>
      
      {productInfo.title.split('  ').slice(0,3).join(' ')}
      </span>
      
      <div className='flex justify-between my-10'>
      <span> {productInfo.price} EGP</span>
      <span> {productInfo.ratingsAverage} <i className='fas fa-star text-yellow'></i> </span>
      
      </div>

      
      </Link>

      <div><button onClick={()=>{addProductItem(productInfo.id)}} className='bg-green-800 text-white w-3/4 py-5 text-xl'>Add To Cart</button> </div>


      </div>

     
      
      })}

</div> : <Loader></Loader>
}








    </div>
  )
}

    
   
  

