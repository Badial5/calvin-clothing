import { useContext } from 'react'

import { ProductsContext } from '../../contexts/product.context'



const Shop = () => {

  const {product} = useContext(ProductsContext)

  return (
    <div>
      { 
        product.map((product) => (
          <div key={product.id}>
            <h1>{product.name}</h1>
          </div>
        ) )
      }
    </div>
  )
}

export default Shop
