import React, { useContext } from 'react'

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

//context
import { CartContext } from '../../contexts/cart.context'

import "./cart-icon.styles.scss"

const CardIcon = () => {

  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
  console.log("isCartOpen initial state: ", isCartOpen)

  //toggle function
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);


  return (
    <div className='cart-icon-container'  >
        <ShoppingIcon className='shopping-icon' onClick={toggleIsCartOpen} />
        <span className='item-count'>{cartCount}</span>
      
    </div>
  )
}




export default CardIcon
