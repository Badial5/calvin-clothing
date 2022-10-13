import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

//scss
import "./checkout.styles.scss"

const Checkout = () => {
    const {cartItems, addItemToCart, removeItemFromCart} = useContext(CartContext)

    //add item to cart 
    // const addItemToCartHandler = () => (
    //    addItemToCart(cartItems)
    // )

  return (
    <div>
        <h1>I am the CheckOut Page</h1>

        <div>
            {
                cartItems.map((cartItem) => {
                    //destructing
                    const { id, name, quantity} = cartItem;

                    return <div key={id}>
                        <h2>{name}</h2>
                        <span>{quantity}</span>
                        <span onClick={() => removeItemFromCart(cartItem)}
                        >decrement</span>
                        <span onClick={
                            () => addItemToCart(cartItem)
                        }>increment</span>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Checkout
