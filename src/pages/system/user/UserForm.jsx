import { Drawer, Form, Input, Button, Select } from 'antd'
import { useState, useEffect } from 'react'
import { userDictionary } from '../../../assets/dictionary'

const UserForm = (props) => {

  const { id, show, setShow } = props
  const [ title, setTitle ] = useState('')
  const [ form ] = Form.useForm()
  const [ disabled, setDisabled ] = useState(false)
  const [ loading, setLoading ] = useState(false)


  useEffect(() => {
    if(id) {
      setTitle('修改用户信息')
    } else {
      setTitle('添加用户')
    }
  }, [id])

  return (
    <Drawer
      title={title}
      open={show}
      onClose={() => setShow(false)}>
      <Form
        form={form}
        style={{ maxWidth: 600 }}
        labelCol={{ span: 5 }}>
        <Form.Item label="用户名" name="username">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="昵称" name="nickname">
          <Input disabled={disabled} />
        </Form.Item>
        <Form.Item label="状态" name="status">
          <Select>
            {
              userDictionary.userStatusOptions.map(item => {
                return <Select.Option value={item.value} key={item.value}>{item.label}</Select.Option>
              })
            }
          </Select>
        </Form.Item>
        <Form.Item>
          <div className="actions">
            <Button type="primary" loading={loading}>提交</Button>
            <Button>取消</Button>
          </div>
        </Form.Item>
      </Form>

    </Drawer>
  )
}

export default UserForm