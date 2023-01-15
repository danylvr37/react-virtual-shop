import { notification, Col, Button } from 'antd'
import React, { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import { FormInput } from '../form-input/form-input.component'
import './sign-up-form.styles.scss'

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
          console.log('user creation encountered an error:', 'error')
        }
      }
    }
  }

  const openNotification = (body, type) => {
    const notificationBody = {
      success: 'Congrats',
      error: 'An error has occurred',
      warning: 'We have detected a problem'
    }
    notification[type]({
      message: notificationBody[type],
      description: body
    })
  }

  notification.config({
    top: 70
  })

  const handleEvent = (event) => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <>
      <Col span={10}>
        <h1>Don't have an account?</h1>
        <h2>Sign up with your email and password</h2>
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

          <Button onClick={handleSubmit}>Sign Up</Button>
        </form>
      </Col>
    </>
  )
}
