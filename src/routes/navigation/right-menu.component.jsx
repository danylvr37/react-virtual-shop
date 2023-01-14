import React from 'react'
import { Menu, Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'

export const RightMenu = ({ mode }) => {
  const items = [
    {
      label: 'User',
      key: 'submenu',
      icon: <Avatar icon={<UserOutlined />} />,
      children: [
        { label: 'item 1', key: 'submenu-item-1' }
      ]
    }
  ]

  return (
    <>
      <Menu mode={mode} items={items} />
    </>
  )
}
