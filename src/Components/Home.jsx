import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { Link } from 'react-router-dom';
import CategorySlider from './Slider';
import Slider from './Slider';


export default function Home() {

  const [product,setProduct]=useState([])

  const[isLoading, setLoading]= useState(true)

async function getProducts(){




  await axios.get ('https://ecommerce.routemisr.com/api/v1/products').then (({data})=>{ 
    
    
    
    setProduct(data.data)
  
    setLoading(false)
  })

  

  // catch (()=>{ 
    
  //   console.log('error')

  //   setLoading(false)


  //  })

}

useEffect(()=>{

getProducts()

},[])

  return (

    <div className='w-full'>
<Slider></Slider>
{


! isLoading? 

<div className= 'row'>
      

{product.map((productInfo) => {
      
      return <div className='w-1/6 px-4 border-2 border-green-600 py-5'> 

      <Link to={`/productDetails/ ${productInfo.id}`} >
      <img src={productInfo.imageCover} alt={productInfo.title} />
      
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

      <button className='bg-green-800 text-white w-3/4 py-5 text-xl'>Add To Cart</button> 
      </div>
      
      })}
      
          </div>: <Loader></Loader>
}

    
    </div>
    
  )
}
