import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'


import {
  BaseButton, GoogleSignInButton, InvertedButton
} from "../button/button.styles"

import { CartDropdownContainer, EmptyMessage, 
 CartItems } from './cart-dropdown.styles'


const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)

  //use navigate is a hook that enable us to get navigate function

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }


  return (
    <CartDropdownContainer>
        <CartItems>
          {
            cartItems.length ? (cartItems.map((item) => ( <CartItem cartItem key={item.id}
              CartItem={item} /> ))) : 
              (<EmptyMessage>
                No Item In the Cart
                </EmptyMessage>
              )
          }
           
        </CartItems>

        <Button onClick={goToCheckoutHandler}
        >Go TO CHECKOUT</Button>
      
    </CartDropdownContainer>
  )
}

export default CartDropdown
