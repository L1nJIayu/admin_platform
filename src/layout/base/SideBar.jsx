import { useNavigate } from 'react-router-dom'
import { Menu } from 'antd'

import { menu_routes } from '../../router/routes'


const getMenuList = (routes, beforeKey='') => {
  const result = []

  routes.forEach(item => {
    const currentKey = beforeKey + item.path
    let route = {
      ...item,
      key: currentKey
    }
    if(item.children) {
      route.children = getMenuList(item.children, currentKey)
    }
    result.push(route)
  })

  return result

}

const Sidebar = () => {
  
  const navigate = useNavigate()
  const menuList = getMenuList(menu_routes)
  const defaultSelectedKeys = menu_routes[0].path

  const handleRouteChange = (item) => {
    navigate(item.key)
  }

  return (
    <div className="side_bar">
      <Menu
        onClick={handleRouteChange}
        defaultSelectedKeys={[defaultSelectedKeys]}
        items={menuList}
        mode="inline"></Menu>
    </div>
  )
}

export default Sidebar