import { createContext, useEffect, useState } from "react";

import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";

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

    //We can delete it once it reflected in your firebase storage or else
    //anytime u run the app it will rerun and set it with new values
    //in my case I am commenting maybe I will need it


    //we are fireing this one off only once and then Pass the SHOP_DATA
    //as the actual object we want to add
    // useEffect(() => {
    //     //pass in the name you want it to appear at the collection tab
    //     //SHOP_DATA is the data u want it to redlext in your firestore
    //     addCollectionAndDocuments("categories", SHOP_DATA)
    // }, [])



    const value = {products}


    return <ProductsContext.Provider value={value}>
        {children}
    </ProductsContext.Provider>
}