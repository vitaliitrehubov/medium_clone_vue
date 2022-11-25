import { stringify, parseUrl } from 'query-string'

interface Params {
  apiUrl: string;
  limit: number;
  offset: number;
}

export const handleUrlParams = (payload: Params) => {
  const parsedUrl = parseUrl(payload.apiUrl)
  const stringifiedParams = stringify({
    limit: payload.limit,
    offset: payload.offset,
    ...parsedUrl.query
  })

  return `${parsedUrl.url}?${stringifiedParams}`
}