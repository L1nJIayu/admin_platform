import { useState } from 'react'
import {
  Button,
  Form,
  Input
} from 'antd'
import './login.scss'
import { useNavigate } from 'react-router-dom'
import { loginApi } from '../../service/modules/admin'

const Login = () => {

  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const login = async (value) => {
    try {
      setLoading(true)
      const res = await loginApi(value)
      const { token } = res.data
      navigate('/home')
    } catch (e) {
      console.error(e)
    } 
    setLoading(false)
  }

  return (
    <div className='login_page'>
      <div className='title'>登录</div>
      <div className='form_wrapper'>
        <Form
          onFinish={login}>
          <Form.Item name="username">
            <Input placeholder='username'></Input>
          </Form.Item>
          <Form.Item name="password">
            <Input.Password
              placeholder='password'
              autoComplete="off">
            </Input.Password>
          </Form.Item>
          <Form.Item>
            <Button
              type='primary'
              block
              htmlType='submit'
              loading={loading}>登录</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}



export default Login