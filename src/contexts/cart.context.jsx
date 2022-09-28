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


const removeCartItem = (cartItems, cartItemToRemove) => {
    //find the cart item to remove
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id
    );

    //check if the quantity is equal to 1 the remove it from the cart

    if(existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id === cartItemToRemove.id)
    }


    //return back cartitems with the matching cart item with reduce quantity
    return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity - 1 } 
        : cartItem
        
        )
} 

const clearCartItem = (cartItems, cartItemToClear ) => {
    return cartItems.filter(cartItem => cartItem.id === cartItemToClear.id)
}


export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    cartCount: 0,
    cartTotal: 0
})


export const CartProvider = ({children}) => {
    //state
    const [isCartOpen, setIsCartOpen] = useState(false)
    
    //cart to add 
    const [cartItems, setCartItems] = useState([])

    const [cartCount, setCartCount] = useState(0)

    const [cartTotal, setCartTotal] = useState(0)


    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

        //total price
    useEffect(() => {
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setCartTotal(newCartTotal)
    }, [cartItems])

    //this is going to sit in cart-dropdown component
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
         
    }

    //remove 
    const removeItemToCart = (cartItemToRemove) => {
        setCartItems(removeCartItem(cartItems, cartItemToRemove));
         
    }

    //Clear chart
    const clearItemFromCart = (cartItemToClear) => {
        setCartItems(clearCartItem(cartItems, cartItemToClear));
         
    }
    
    const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems,
        cartCount, removeItemToCart, clearItemFromCart, cartTotal };

    return <CartContext.Provider value={value} >
        {children}
        </CartContext.Provider>
}