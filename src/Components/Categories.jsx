import { cartContext } from '../context/cartContext';
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Loader from './Loader';
import { Link } from 'react-router-dom';




export default function Categories(props) {

  let category= props.categoryName;

  let {addProductToCart}= useContext(cartContext);
  const[isLoading, setLoading]= useState(true)

  const[product,setDetails]=useState([])

  async  function addProductItem(id){
    let response= await addProductToCart(id)
   console.log(response);
   }

    function getRelatedCategory(){

  axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    

    .then(({data})=>{
let allProducts= data.data; 
setLoading(false)
allProducts.filter ((prod) => {
return prod.category.name === category 

})
setDetails(data.data)
    })
    .catch(()=>{

      setLoading(false)
    
    })
  }


  
  useEffect(()=>{

    getRelatedCategory()
  },[])
  return (
    <div className="section">

{

!isLoading? 

<div className="row">

{product.map((productInfo) => {
      
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
