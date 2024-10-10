import Axios from 'axios'


const axios = Axios.create({
  base: 'dev'
})

export default axios