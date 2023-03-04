import React, { useContext } from 'react'
import { Button, Card, Col, Row } from 'antd'
import { CartContext } from '../../contexts/cart.context'
import { UserContext } from '../../contexts/user.context'

import './product-card.sytles.scss'
import { useNavigate } from 'react-router-dom'

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product
  const { addItemToCart } = useContext(CartContext)
  const { currentUser } = useContext(UserContext)

  const navigate = useNavigate()

  const addProductToCar = () => addItemToCart(product)

  const goToAuth = () => {
    navigate('/auth')
  }

  return (
    <div className='product-card-container'>
      <Col className='gutter-row' span={6}>
        <Card
          className='product-card'
          hoverable
          style={{ width: 300, marginTop: 10, marginBottom: 10 }}
          cover={<img alt={name} id='product-image' src={imageUrl} style={{ width: 300, height: 380, objectFit: 'cover' }} />}
        >
          <Row justify='center'>
            {
              currentUser
                ? <Button id='addButton' style={{ marginTop: -80, display: 'block' }} onClick={addProductToCar}>Add to Cart</Button>
                : <Button id='addButton' style={{ marginTop: -80, display: 'block' }} onClick={goToAuth}>Sign Up</Button>
              }
          </Row>
          <Row justify='space-between' style={{ fontSize: 16 }}>
            <p>{name}</p>
            <p>{price}</p>
          </Row>
        </Card>
      </Col>
    </div>
  )
}
