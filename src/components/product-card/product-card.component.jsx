import React, {useContext} from 'react'
import "./product-card.styles.scss"

import Button from '../button/button.component'

import { CartContext } from '../../contexts/cart.context'

//lets pass in the  project data
const ProductCard = ({product}) => {

    //once we pass in the product, we need to
    //destructing the product
    const {name, price, imageUrl } = product

    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)


  return (
    <div className='product-card-container'>
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
      
      <Button buttonType='inverted' 
      onClick={addProductToCart} >
        Add to card
      </Button>

    </div>
  )
}

export default ProductCard
