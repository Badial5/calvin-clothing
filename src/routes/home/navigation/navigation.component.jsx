import React, {Fragment, useContext} from 'react'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../../assets/crown.svg'
import { UserContext } from '../../../contexts/user.context'
import { signOutUser } from '../../../utils/firebase/firebase.utils'

import './navigation.styles.scss'


const Navigation = () => {
    const { currentUser } = useContext(UserContext)

 

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
            //curly bracket cos we re introducing
            // a javascript 

            //if currentUser is true change the signin
            // to sign out and vice versa
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

            
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  }

  export default Navigation