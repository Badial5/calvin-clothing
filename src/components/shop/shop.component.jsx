import { useContext, Fragment } from "react"
import { CategoriesContext } from "../../contexts/categories.context"

import ProductCard from "../product-card/product-card.component"

import CategoryPreview from "../category-preview/category-preview.component"

import "./shop.styles.scss"

const Shop = () => {

  //const {products: PRODUCTS} = useContext(CategoriesContext)
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
    {
      Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];

        return <CategoryPreview key={title} title={title} 
        products={products} />
      })
    }


    </div>

  )
    
  }
  
export default Shop;
