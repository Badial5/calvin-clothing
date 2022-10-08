import { createContext, useState } from "react";

//importing the products json
import PRODUCTS from "../shop-data.json"


export const ProductsContext = createContext({

    //what do we want to store
    //we know we want to install an array of products

    products: [],
    yaw: "Hello World"

    //next we need a function that will help us to set 
    //that products 
    
})



export const ProductsProvider = ({children}) => {
    //state
    
    const [ products, setProducts  ] = useState(PRODUCTS)

    const value = {products}


    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}