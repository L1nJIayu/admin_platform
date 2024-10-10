import axios from '../axios'

export function loginApi(params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: {
          token: 'abcd1234'
        }
      })
    }, 2000)
  })
  return axios.post('/login', params)
}