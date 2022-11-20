import axios from '@/api/axios'
import { RegisterCredentials } from '@/types/auth'

const register = (credentials: RegisterCredentials) => {
  return axios.post('/users', { user: credentials })
}

export default {
  register
}
