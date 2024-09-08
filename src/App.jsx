import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import  Layout  from './Components/Layout'
import  Home  from './Components/Home'
import  Login  from './Components/Login'
import  Register  from './Components/Register'
import  Products  from './Components/Products'
import  Cart  from './Components/Cart'
import  Categories  from './Components/Categories'
import  Brand  from './Components/Brand'
import  NotFound  from './Components/NotFound'
import Wishlist from './Components/Wishlist'
import Logout from './Components/Logout'
import UserContextProvider from './context/userContext' 
import {ProtectedRoute} from './Components/ProtectedRoute/ProtectedRoute'
import loader from '../src/Components/Loader';
import ProductDetails from './Components/ProductDetails'
import {CartContextProvider}  from './context/cartContext'
import Come from './Components/Come'






function App() {

 let routes = createBrowserRouter ([{ path:'/', element:<Layout></Layout>, children:[

    {path:'/home', element:<ProtectedRoute><Home></Home></ProtectedRoute>},
    {path:'/cart', element:<ProtectedRoute><Cart></Cart></ProtectedRoute>}, 
    {path:'/wishlist', element:<ProtectedRoute><Wishlist></Wishlist> </ProtectedRoute>}, 
    {path:'/', element:<Login></Login> },
    {path:'/login', element:<Login></Login> },
    {path:'/register', element:<Register></Register>},
    {path:'/products', element: <ProtectedRoute> <Products></Products> </ProtectedRoute>},
    {path:'/categories', element: <ProtectedRoute> <Categories></Categories> </ProtectedRoute>},
    {path:'/productDetails/:id/:category', element: <ProtectedRoute><ProductDetails></ProductDetails> </ProtectedRoute>},
    {path:'/brand', element: <ProtectedRoute> <Brand></Brand> </ProtectedRoute>},
    {path:'*', element:<NotFound></NotFound>},
    {path:'/come', element:<Come></Come>},
    

  ]



  } ])

  return (
    
    <CartContextProvider>
   <UserContextProvider>
    <RouterProvider router= {routes}></RouterProvider>
    </UserContextProvider>
    </CartContextProvider>
 
  )
}

export default App
