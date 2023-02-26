import { Divider, Row } from 'antd'
import Title from 'antd/es/typography/Title'
import { SignInForm } from '../../components/sign-in-form/sign-in-form.component'
import { SignUpForm } from '../../components/sign-up-form/sign-up-form.component'

import './authentication.styles.scss'

export const Authentication = () => {
  return (
    <>
      <Divider><Title>Sign In</Title></Divider>
      <Row gutter={24} justify='center'>
        <SignInForm />
        <SignUpForm />
      </Row>
    </>
  )
}
