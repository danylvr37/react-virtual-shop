
import React from 'react'
import { Menu } from 'antd'
import { HomeOutlined, ShopOutlined, TeamOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export const LeftMenu = ({ mode }) => {
  const navigate = useNavigate()

  const items = [
    { label: 'Home', key: '/', icon: <HomeOutlined /> },
    { label: 'Shop', key: '/shop', icon: <ShopOutlined /> },
    { label: 'Sign In', key: '/auth', icon: <TeamOutlined /> }
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
