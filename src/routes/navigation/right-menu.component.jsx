import React, { useContext } from 'react'

import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { UserOutlined } from '@ant-design/icons'
import { CartDropDown } from '../../components/dropdowns/cart-dropdown/cart-dropdwon.component'
import { UserDropdown } from '../../components/dropdowns/user-dropdown/user-dropdown.component'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from 'react-router-dom'

export const RightMenu = ({ user, mode }) => {
  const { isCartOpen } = useContext(CartContext)
  const navigate = useNavigate()

  const goToAuthHandler = () => {
    navigate('/auth')
  }

  const goToCheckHandler = () => {
    navigate('/checkout')
  }

  return (
    <>
      {
        mode === 'horizontal'
          ? <UserDropdown user={user} mode={mode} goToAuthHandler={goToAuthHandler} />
          : <span className='dropdown-menu-vertical'><UserOutlined /> {user ? <div>Logout</div> : <div onClick={goToAuthHandler}>Login</div>}</span>
      }
      {
        mode === 'horizontal'
          ? <CartIcon mode={mode} />
          : <span className='dropdown-cart-menu-vertical' onClick={goToCheckHandler}><CartIcon className='dropdown-svg-menu-vertical' /> <div>Checkout</div></span>
      }
      {(isCartOpen && (mode === 'horizontal')) && <CartDropDown />}
    </>
  )
}
