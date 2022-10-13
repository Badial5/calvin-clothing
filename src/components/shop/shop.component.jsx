import { useContext } from "react"
import { ProductsContext } from "../../contexts/products.context"

import ProductCard from "../product-card/product-card.component"

import "./shop.styles.scss"

const Shop = () => {

  const {products: PRODUCTS} = useContext(ProductsContext)

  return (
    <div className="products-container">
      
      {
        PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }

    </div>
  )
}

export default Shop
