import React, { useContext, useEffect, useState } from 'react'
import { Layout, Button, Drawer, Divider } from 'antd'
import { LeftMenu } from './left-menu.component'
import { RightMenu } from './right-menu.component'
import { MenuOutlined } from '@ant-design/icons'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { ReactComponent as DlvrLogo } from '../../assets/dlvr.logo.svg'
import { UserContext } from '../../contexts/user.context'

import './navigation.styles.scss'

export const Navigation = () => {
  const [visible, setVisible] = useState(false)

  const { currentUser } = useContext(UserContext)

  const showDrawer = () => {
    setVisible(!visible)
  }

  const { pathname: location } = useLocation()

  useEffect(() => {
    setVisible(false)
  }, [location])

  return (
    <>
      <nav className='navbar'>
        <Layout>
          <Layout.Header className='nav-header'>
            <Link className='logo' to='/'>
              <DlvrLogo />
            </Link>
            <div className='navbar-menu'>
              <div className='leftMenu'>
                <LeftMenu mode='horizontal' />
              </div>
              <Button className='menuButton' type='text' onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <div className='rightMenu'>
                <RightMenu
                  mode='horizontal'
                  user={currentUser}
                />
              </div>

              <Drawer
                title='DLVR'
                placement='right'
                closable
                onClose={showDrawer}
                open={visible}
                style={{ zIndex: 99999 }}
              >
                <LeftMenu mode='inline' />
                <Divider />
                <RightMenu mode='inline' />
              </Drawer>
            </div>
          </Layout.Header>
        </Layout>
      </nav>

      <Outlet />
    </>
  )
}
