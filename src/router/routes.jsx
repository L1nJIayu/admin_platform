import { lazy } from 'react'
import {
  SettingOutlined,
  TeamOutlined,
  SmileOutlined,
  HomeOutlined,
  BarsOutlined
} from '@ant-design/icons'

import Login from '../pages/login/Login'
import Layout from '../layout/base/Layout'
import LoadingMask from '../components/loadingMask/LoadingMask'
import { Suspense } from 'react'


const Home = lazy(() => import('../pages/home/Home'))
const TodoTable = lazy(() => import('../pages/todo/TodoTable'))
const UserTable = lazy(() => import('../pages/system/user/UserTable'))
const RoleTable = lazy(() => import('../pages/system/role/RoleTable'))

export const menu_routes = [
  {
    path: '/home',
    label: '首页',
    icon: <HomeOutlined />,
    element: (
      <Suspense fallback={<LoadingMask />}>
        <Home />
      </Suspense>
    )
  },
  {
    path: '/todo',
    label: '待办事项',
    icon: <BarsOutlined />,
    element: (
      <Suspense fallback={<LoadingMask />}>
        <TodoTable />
      </Suspense>
    )
  },
  {
    label: '系统管理',
    path: '/system/',
    icon: <SettingOutlined />,
    children: [
      {
        path: 'user',
        label: '用户管理',
        icon: <TeamOutlined />,
        element: (
          <Suspense fallback={<LoadingMask />}>
            <UserTable />
          </Suspense>
        )
      },
      {
        path: 'role',
        label: '角色管理',
        icon: <SmileOutlined />,
        element: (
          <Suspense fallback={<LoadingMask />}>
            <RoleTable />
          </Suspense>
        )
      }
    ]
  }
]

const default_routes = [
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/',
    element: <Layout></Layout>,
    children: menu_routes
  }
]


export default default_routes