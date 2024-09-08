import { createContext } from "react";
import axios from 'axios';


let headers= {

    token:localStorage.getItem('userToken')
}

export let cartContext = createContext()

export function CartContextProvider(props){


    function addProductToCart(productId){

       return  axios.post('https://ecommerce.routemisr.com/api/v1/cart',


            {
productId:productId

            },
            {

                headers:headers
                
            }
        ) .then((response)=> response)
        .catch('error')
    }

    return <cartContext.Provider value={{addProductToCart}}>


        {props.children}
    </cartContext.Provider>
}

