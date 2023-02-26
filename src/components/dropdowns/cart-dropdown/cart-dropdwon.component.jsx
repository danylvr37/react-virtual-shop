import { Button } from 'antd'

import './cart-dropdown.styles.scss'

export const CartDropDown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items' />
      <Button id='button-cart'>Hola</Button>
    </div>
  )
}
