import React, { useContext } from 'react'

import { CartIcon } from '../../components/cart-icon/cart-icon.component'
import { UserOutlined } from '@ant-design/icons'
import { CartDropDown } from '../../components/dropdowns/cart-dropdown/cart-dropdwon.component'
import { UserDropdown } from '../../components/dropdowns/user-dropdown/user-dropdwon.component'
import { CartContext } from '../../contexts/cart.context'

export const RightMenu = ({ user, mode }) => {
  const { isCartOpen } = useContext(CartContext)

  return (
    <>
      {
        mode === 'horizontal'
          ? <UserDropdown user={user} mode={mode} />
          : <span className='dropdawn-menu-vertical'><UserOutlined /> {user ? <div>Logout</div> : <div>Login</div>}</span>
      }
      <CartIcon mode={mode} />
      {isCartOpen && <CartDropDown />}
    </>
  )
}
