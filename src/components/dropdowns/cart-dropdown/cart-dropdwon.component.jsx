import { Button } from 'antd'
import { useContext } from 'react'
import { CartContext } from '../../../contexts/cart.context'
import { CartItem } from '../../cart-item/cart-item.component'

import './cart-dropdown.styles.scss'

export const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems?.map(item =>
          <CartItem key={item.id} cartItem={item} />
        )}
      </div>
      <Button id='button-cart'>GO TO CHECKOUT</Button>
    </div>
  )
}
