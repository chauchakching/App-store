export const SEARCH_QUERY = 'DATA/SEARCH/SEARCH_QUERY'

export const search = query => ({
  type: SEARCH_QUERY,
  data: query
})
