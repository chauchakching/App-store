import fetchHelper from 'helpers/fetchHelper'

export default {
  fetchApp (appId) {
    return fetchHelper.fetch({
      url: `https://itunes.apple.com/hk/lookup?id=${appId}`,
      method: 'get'
    })
  },

  fetchApps (appIds) {
    return fetchHelper.fetch({
      url: `https://itunes.apple.com/hk/lookup?id=${appIds.join(',')}`,
      method: 'get'
    })
  },

  fetchTopFreeAppsWithLimit (limit) {
    return fetchHelper.fetch({
      url: `https://itunes.apple.com/hk/rss/topfreeapplications/limit=${limit}/json`,
      method: 'get'
    })
  },

  fetchTopGrossingAppsWithLimit (limit) {
    return fetchHelper.fetch({
      url: `https://itunes.apple.com/hk/rss/topgrossingapplications/limit=${limit}/json`,
      method: 'get'
    })
  }
}
