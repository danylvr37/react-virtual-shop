import { Col, Button, Row } from 'antd'
import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { openNotification } from '../../utils/firebase/notifications.utils'
import { FormInput } from '../form-input/form-input.component'

import './sign-up-form.styles.scss'
import Title from 'antd/es/typography/Title'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      openNotification('Passwords do not match', 'warning')
    } else {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(email, password)

        await createUserDocumentFromAuth(user, { displayName })
        openNotification('You already have a user account. What are you waiting for to buy?', 'success')
        resetFormFields()
      } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
          openNotification('Cannot create user, email already in use', 'error')
        } else {
          openNotification('Cannot create user, error: ' + error, 'error')
          console.log('user creation encountered an error:', 'error')
        }
      }
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
          <Title level={2}>Don't have an account?</Title>
          <Title level={4}>Register with your email and password</Title>
        </Row>
        <form className='form-group'>
          <FormInput
            label='Display Name'
            type='text'
            required
            onChange={handleEvent}
            name='displayName'
            value={displayName}
          />

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

          <FormInput
            label='Confirm Password'
            type='password'
            required
            onChange={handleEvent}
            name='confirmPassword'
            value={confirmPassword}
          />

          <Button id='signUpButton' onClick={handleSubmit}>Sign Up</Button>
        </form>
      </Col>
    </>
  )
}
