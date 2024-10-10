import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import './layout.scss'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }

  return (
    <div className="header">
      <div className="actions">
        <div className="action_item">
          <UserOutlined />
        </div>
        <div className="action_item" onClick={logout}>
          <LogoutOutlined />
        </div>
      </div>
    </div>
  )
}

export default Header