import axios from '@/api/axios'
import { AuthCredentials } from '@/types/auth'

const register = (credentials: AuthCredentials) => {
  return axios.post('/users', { user: credentials })
}

const login = (credentials: AuthCredentials) => {
  return axios.post('/users/login', { user: credentials })
}

const getUser = () => {
  return axios.get('/user')
}

export default {
  register,
  login,
  getUser
}
