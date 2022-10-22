import React, {Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
// import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import  CwLogo  from '../../../assets/cwlogo.png'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'
import CartIcon from '../../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../../contexts/cart.context'




import {NavigationContainer,
NavLink, NavLinks, LogoContainer, LogoImg
} from  "./navigation.styles.jsx"


const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    const { isCartOpen} = useContext(CartContext)

   

    return (
      <>
        <NavigationContainer>
            <LogoContainer to='/' >
                <LogoImg src={CwLogo}  className='logo' alt='Logo' to='/' />
            </LogoContainer>



          <NavLinks >
            <NavLink to='/shop' >
                SHOP
            </NavLink>

          
            { 
            //curly bracket cos we re introducing
            // a javascript 

            //if currentUser is true change the signin
            // to sign out and vice versa
              currentUser ? (
                <NavLink as="span" onClick={signOutUser}
                NavLink >
                  SIGN OUT 
                </NavLink> )
                : (
                <NavLink to='/auth'>
                SIGN IN
              </NavLink>
              )

              
              
            }
            
            <CartIcon />
            
          </NavLinks>
          {
            //if the CartIcon is click which will render it true then 
            // open the cart-dropdown

            isCartOpen && <CartDropdown />
            //isCartOpen ? <CartDropdown /> : console.log("")

          }
        </NavigationContainer>
        <Outlet />
      </>
    )
  }

  export default Navigation