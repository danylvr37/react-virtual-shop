import { Col, Button, Row } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword
} from '../../utils/firebase/firebase.utils'
import { openNotification } from '../../utils/firebase/notifications.utils'
import { FormInput } from '../form-input/form-input.component'

import './sign-in-form.styles.scss'
import Title from 'antd/es/typography/Title'

const defaultFormFields = {
  email: '',
  password: ''
}

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)
      openNotification('Lets go!', 'success')
      resetFormFields()
    } catch (error) {

    }
  }

  const handleEvent = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <Col span={10}>
        <Row justify='center'>
          <Title level={2} justify='center'>Already have an account?</Title>
          <Title level={4}>Sign in with your email and password</Title>
        </Row>
        <form className='form-group'>

          <FormInput
            label='Email'
            type='email'
            required onChange={handleEvent}
            name='email'
            value={email}
          />

          <FormInput
            label='Password'
            type='password'
            required
            onChange={handleEvent}
            name='password'
            value={password}
          />

          <Row justify='space-between'>
            <Button id='signInButton' onClick={handleSubmit}>Sign In</Button>
            <Button type='primary' onClick={signInWithGoogle} icon={<GoogleOutlined />}>Google sign In</Button>
          </Row>
        </form>
      </Col>
    </>
  )
}
