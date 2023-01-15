import { Input } from 'antd'
import './form-input.styles.scss'

export const FormInput = ({ label, ...otherProps }) => {
  let inputForm

  (otherProps.type === 'password')
    ? inputForm = <Input.Password {...otherProps} className='form-input' />
    : inputForm = <Input {...otherProps} className='form-input' />
  return (
    <div className='group'>
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
      {inputForm}
    </div>
  )
}
