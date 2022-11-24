import axios from '@/api/axios'

const getFeed = (apiUrl: string): Promise<any> => {
  return axios.get(apiUrl)
}

export default {
  getFeed
}