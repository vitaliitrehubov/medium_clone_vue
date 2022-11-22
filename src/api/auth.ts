import axios from '@/api/axios'
import { AuthCredentials } from '@/types/auth'

const register = (credentials: AuthCredentials) => {
  return axios.post('/users', { user: credentials })
}

const login = (credentials: AuthCredentials) => {
  return axios.post('/users/login', { user: credentials })
}

export default {
  register,
  login
}
