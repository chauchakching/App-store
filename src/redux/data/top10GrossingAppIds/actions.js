import apiService from 'services/apiService'
import rssAppDataHelper from 'helpers/rssAppDataHelper'

import {fetchAppByIds} from 'redux/data/apps/actions'
import {getTop10GrossingAppIds} from 'redux/data/top10GrossingAppIds/selectors'

export const FETCH_TOP_10_GROSSING_APPS_FROM_RSS = 'DATA/TOP_10_GROSSING_APP_IDS/FETCH_TOP_10_GROSSING_APPS_FROM_RSS'

export const fetchTop10GrossingAppIds = () => {
  return async (dispatch, getState) => {
    const {data} = await apiService.fetchTopGrossingAppsWithLimit(10)

    const apps = rssAppDataHelper.getTransformedAppsFromResponseData(data)

    dispatch({
      type: FETCH_TOP_10_GROSSING_APPS_FROM_RSS,
      data: apps
    })
  }
}

export const fetchTop10GrossingApps = () => {
  return async (dispatch, getState) => {
    await dispatch(fetchTop10GrossingAppIds())
    const top10GrossingAppIds = getTop10GrossingAppIds(getState())
    await dispatch(fetchAppByIds(top10GrossingAppIds))
  }
}
