import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'

import CartItem from '../cart-item/cart-item.component'

import Checkout from '../checkout/checkout.component'


import "./cart-dropdown.styles.scss"



const CartDropdown = () => {

  const { cartItems } = useContext(CartContext)

  //use navigate is a hook that enable us to get navigate function

  const navigate = useNavigate()

  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }


  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
           {cartItems.map((item) => ( <CartItem cartItem key={item.id}
            CartItem={item} /> ))}
        </div>

        <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
      
    </div>
  )
}

export default CartDropdown
