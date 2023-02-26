import React from 'react'
import { Button, Card, Col, Row } from 'antd'

import './product-card.sytles.scss'

export const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product

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
            <Button id='addButton' style={{ marginTop: -80, display: 'block' }}>Sign Up</Button>
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
