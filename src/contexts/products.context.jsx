import { createContext, useState } from "react";

//importing the products json
import SHOP_DATA from "../shop-data.js"


export const ProductsContext = createContext({

    //what do we want to store
    //we know we want to install an array of products

    products: [],
  
    //next we need a function that will help us to set 
    //that products 
    
})



export const ProductsProvider = ({children}) => {
    //state
    
    const [ products, setProducts  ] = useState([])

    const value = {products}


    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}