import React from 'react'
import { Avatar, Dropdown, message } from 'antd'
import { UserOutlined } from '@ant-design/icons'

import './user-dropdown.styles.scss'
import { signOutUser } from '../../../utils/firebase/firebase.utils'

export const UserDropdown = ({ user, mode }) => {
  const onClick = ({ key }) => {
    message.info(`Click on item ${key}`)
  }

  const signOutHandler = async () => {
    await signOutUser()
  }

  const items = [
    user
      ? { label: 'logout', key: 'logout', onClick: signOutHandler }
      : { label: 'log in', key: 'login' }
  ]

  return (
    <Dropdown
      className='dropdawn-menu-horizontal'
      menu={{
        items,
        onClick
      }}
    >
      <a onClick={(e) => e.preventDefault()}>
        <Avatar><UserOutlined /></Avatar>
      </a>
    </Dropdown>
  )
}
