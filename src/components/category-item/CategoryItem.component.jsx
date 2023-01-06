import React from 'react'
import { Card } from 'antd'

import './category-item.styles.scss'

export const CategoryItem = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <Card
      className='category-container'
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Card>
  )
}
