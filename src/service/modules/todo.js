import axios from '../axios'

export function getTableDataApi(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        list: [
          { id: 1, title: '买书', status: 0, createDateTime: '2024-10-10 20:37:34' },
          { id: 2, title: '买书2', status: 1, createDateTime: '2024-10-10 20:37:34' },
          { id: 3, title: '买书3', status: 2, createDateTime: '2024-10-10 20:37:34' },
          { id: 4, title: '买书4', status: 3, createDateTime: '2024-10-10 20:37:34' },
        ],
        total: 10
      })
    }, 2000)
  })
  return axios.post('/login', params)
}