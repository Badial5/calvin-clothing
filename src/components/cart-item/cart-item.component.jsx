import React from 'react'

import "./cart-item.styles.scss"


const CartItem = ({CartItem}) => {

    const { name, quantity, price, imageUrl } = CartItem


  return (
    <div className='cart-item-container'>
      
      {/* Inside I am going to have image that is the image background
      at the left */}
 
      <img src={imageUrl} alt={`${name}`} />
      <div className="item-details">

        <span className='name'>{name}</span>
        <span className='price'>{quantity} x Ghs{price}</span>
      </div>

      <span>{quantity}</span>
    </div>
  )
}

export default CartItem
