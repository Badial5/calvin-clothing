import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"

import ProductCard from "../product-card/product-card.component"

import './shop.styles.scss'


const Shop = () => {

    const { products } = useContext(ProductsContext)

  return (
    <div className="products-container">
      

    {
        products.map((product) => (
            <div  key={product.id}>
                <ProductCard  
                product={product}/>
            </div>
        ))
    }

   
    </div>
  )
}

export default Shop
