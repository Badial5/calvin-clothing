import {React, useContext} from 'react'
//import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg"

//context
import { CartContext } from '../../contexts/cart.context'


import {
  ShoppingIcon, CartIconContainer, ItemCount
} from "./cart-icon.styles"


const CartIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

    //function for toggle
    //this means will execute true of the user click on the shoppingIcon
    const toggleIsCartOpen = () => {
      return setIsCartOpen(!isCartOpen)
    }
    console.log("isCartOpen ",isCartOpen)

  return (
    <CartIconContainer onClick={toggleIsCartOpen} >
        <ShoppingIcon className='shopping-icon' />
        <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon
