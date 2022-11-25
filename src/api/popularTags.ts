import axios from '@/api/axios'
import { PopularTagsResponse } from '@/types/feed'

const getPopularTags = (): Promise<any> => {
  return axios
    .get('/tags')
    .then(({ data: { tags } }: PopularTagsResponse) => tags)
}

export default {
  getPopularTags
}