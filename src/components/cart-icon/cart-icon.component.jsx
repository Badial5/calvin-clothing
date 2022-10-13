import {React, useContext} from 'react'
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

//context
import { CartContext } from '../../contexts/cart.context'


import "./cart-icon.styles.scss"


const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    //function for toggle
    //this means will execute true of the user click on the shoppingIcon
    const toggleIsCartOpen = () => {
      return setIsCartOpen(!isCartOpen)
    }
    console.log("isCartOpen ",isCartOpen)

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen} >
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{cartCount}</span>
    </div>
  )
}

export default CartIcon
