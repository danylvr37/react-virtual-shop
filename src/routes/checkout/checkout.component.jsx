import { Col, Divider, Row } from 'antd'
import { LeftOutlined, CloseOutlined, RightOutlined } from '@ant-design/icons';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'


import './checkout.styles.scss'

export const Checkout = () => {
  const { cartItems, totalToPay, addItemToCart, removeItemToCart, clearItemToCart } = useContext(CartContext)

  return (
    <>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='checkout-row' span={1}>
        <Col span={4}>
          <div>Product</div>
        </Col>
        <Col span={4} className='checkout-col-center'>
          <div>Description</div>
        </Col>
        <Col span={4} className='checkout-col-center'>
          <div>Quantity</div>
        </Col>
        <Col span={4} className='checkout-col-center'>
          <div>Price</div>
        </Col>
        <Col span={4} className='checkout-col-end'>
          <div>Remove</div>
        </Col>
        <Col span={20}>
          <Divider />
        </Col>
      </Row>

      {
        cartItems.map((cartItem) => (
          <Row key={cartItem.id} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='checkout-row' span={1}>
            <Col span={4} className='checkout-image'>
              <img src={cartItem.imageUrl} alt={`${cartItem.name}`} />
            </Col>
            <Col span={4} className='checkout-col-center'>
              <div>{cartItem.name}</div>
            </Col>
            <Col span={4} className='checkout-col-center'>
              <div><LeftOutlined className='checkout-arrow' onClick={()=> removeItemToCart(cartItem)} /> {cartItem.quantity} <RightOutlined onClick={()=>addItemToCart(cartItem)} /></div>
            </Col>
            <Col span={4} className='checkout-col-center'>
              <div className='checkout-div-arrow'>{cartItem.price}</div>
            </Col>
            <Col span={4} className='checkout-col-middle-end'>
              <CloseOutlined onClick={() => clearItemToCart(cartItem)} />
            </Col>
            <Col span={20}>
              <Divider />
            </Col>
          </Row>
        ))
      }

      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className='checkout-row' span={1}>
        <Col span={20} className='checkout-col-end'>
          <div className='total-checkout'>TOTAL: ${totalToPay}</div>
        </Col>
      </Row>
    </>
  )
}
