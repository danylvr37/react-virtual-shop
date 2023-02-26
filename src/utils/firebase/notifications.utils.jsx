import { notification } from 'antd'

export const openNotification = (body, type) => {
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
