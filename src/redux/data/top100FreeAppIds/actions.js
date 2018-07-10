import apiService from 'services/apiService'
import rssAppDataHelper from 'helpers/rssAppDataHelper'

export const FETCH_TOP_100_FREE_APPS_FROM_RSS = 'DATA/TOP_10_FREE_APP_IDS/FETCH_TOP_100_FREE_APPS_FROM_RSS'

export const fetchTop100FreeAppIds = () => {
  return async (dispatch, getState) => {
    const {data} = await apiService.fetchTopFreeAppsWithLimit(100)

    const apps = rssAppDataHelper.getTransformedAppsFromResponseData(data)

    dispatch({
      type: FETCH_TOP_100_FREE_APPS_FROM_RSS,
      data: apps
    })
  }
}
