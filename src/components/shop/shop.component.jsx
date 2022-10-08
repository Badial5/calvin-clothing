// Inorder to use context data, You have to import
//useContext first
import { useContext } from "react"

//then the context we want to use or access
import { ProductsContext } from "../../contexts/products.context"
import ProductCard from "../product-card/product-card.component"

import "./shop.styles.scss"


const Shop = () => {

  //destructure products from ProductsContext and rename
  // it as Products
  const {products: Products} = useContext(ProductsContext)


  return (
    <div className="products-container">

      {
        Products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }  

      
      
      

    </div>
  )
}

export default Shop
