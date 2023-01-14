
import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined, ShopOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export const LeftMenu = ({ mode }) => {
  const navigate = useNavigate()

  const items = [
    { label: 'Shop', key: '/shop', icon: <ShopOutlined /> },
    { label: 'Sign In', key: '/sign-in', icon: <ShopOutlined /> }
  ]

  const getItemByKey = (key) => {
    const item = items.find((i) => i.key === key)
    navigate(item.key)
  }

  return (
    <Menu
      mode={mode}
      items={items}
      onClick={({ key }) => { getItemByKey(key) }}
      defaultSelectedKeys={[window.location.pathname]}
    />
  )
}
