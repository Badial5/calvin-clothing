import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd ) => {
    //find if cartIttems contain productToAdd
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    //if found, increment quantity

    if(existingCartItem) {
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id
        ? {...cartItem, quantity: cartItem.quantity + 1 } 
        : cartItem
        
        )
    }

    //return new array with modified cartItems/new cart item
    return [...cartItems, {...productToAdd, quantity: 1}];

}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    cartCount: 0
})


export const CartProvider = ({children}) => {
    //state
    const [isCartOpen, setIsCartOpen] = useState(false)
    
    //cart to add 
    const [cartItems, setCartItems] = useState([])

    const [cartCount, setCartCount] = useState(0)


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    //this is going to sit in cart-dropdown component
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
         
    }
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,
        cartCount };

    return <CartContext.Provider value={value} >
        {children}
        </CartContext.Provider>
}