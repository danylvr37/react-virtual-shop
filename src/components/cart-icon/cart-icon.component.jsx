import { useContext } from 'react'
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { CartContext } from '../../contexts/cart.context'

import './cart-icon.styles.scss'

export const CartIcon = ({ mode }) => {
  const { toggleIsCartOpen } = useContext(CartContext)

  const cartDropdow = mode === 'horizontal' ? 'cart-icon-container-horizontal' : 'cart-icon-container-vertical'

  return (
    <div className={cartDropdow} onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}
