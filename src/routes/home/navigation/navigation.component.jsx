import React, {Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'

import './navigation.styles.scss'

import CardIcon from '../../../components/cart-icon/cart-icon.component'
import CartDropdown from '../../../components/cart-dropdown/cart-dropdown.component'
import { CartContext } from '../../../contexts/cart.context'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)

    //cart context
    const { isCartOpen } = useContext(CartContext)

 

    return (
      <Fragment>
        <div className='navigation' >
            <Link className='logo-container' to='/' >
                <CrwnLogo className='logo' to='/' />
            </Link>
          <div className='nav-links-container' >
            <Link className='nav-link' to='/shop' >
                SHOP
            </Link>

            {
              currentUser ? (
                <span onClick={signOutUser}
                 className='nav-link' >
                  SIGN OUT 
                </span> )
                : (
                <Link className='nav-link' to='/auth'>
                SIGN IN
              </Link>
              )
              
            }

            <CardIcon />
          </div>

            {  isCartOpen  && <CartDropdown /> }

        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation