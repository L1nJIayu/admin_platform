import axios from '../axios'
import { useId } from 'react'

export function getTableDataApi(params) {
  console.log('发起请求')
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        list: [
          { id: 1, username: 'jeffrey', nickname: '嘉裕', status: 0, createAt: '2024-10-10 20:37:11' },
          { id: 2, username: 'a', nickname: '小A', status: 1, createAt: '2024-10-10 20:37:22' },
          { id: 3, username: 'b', nickname: '小B', status: 2, createAt: '2024-10-10 20:37:33' },
          { id: 4, username: 'c', nickname: '小C', status: 3, createAt: '2024-10-10 20:37:44' },
        ],
        total: 21
      })
    }, 1000)
  })
  return axios.post('/login', params)
}