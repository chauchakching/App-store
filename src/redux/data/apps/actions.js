import {compose, path, prop, pick, find} from 'ramda'

import apiService from 'services/apiService'

export const FETCH_APP = 'DATA/APPS/FETCH_APP'
export const FETCH_APPS = 'DATA/APPS/FETCH_APPS'
export const FETCH_APPS_FROM_RSS = 'DATA/APPS/FETCH_APPS_FROM_RSS'

const transformAppData = app => ({
  id: app.trackId,
  name: app.trackName,
  iconUrl: app.artworkUrl100,
  author: app.artistName,
  ...pick([
    'description',
    'genres',
    'userRatingCount',
    'averageUserRating'
  ])(app)
})

export const fetchApp = (appId) => {
  return async (dispatch, getState) => {
    const {data} = await apiService.fetchApp(appId)
    const app = compose(
      transformAppData,
      path(['results', 0])
    )(data)

    dispatch({
      type: FETCH_APP,
      data: app
    })
  }
}

export const fetchAppByIds = (appIds) => {
  return async (dispatch, getState) => {
    const fetchedApps = getState().data.apps
    const fetchedAppIds = fetchedApps.map(prop('id'))
    const findAppById = appId => find(app => app.id === appId)(fetchedApps)

    // console.log('already fetched app ids:', fetchedAppIds)
    const newAppIds = appIds.filter(appId => (
      !fetchedAppIds.includes(appId) ||
      !compose(
        prop('withDetail'),
        findAppById
      )(appId)
    ))

    // console.log('fetch app with ids:', newAppIds)
    if (newAppIds.length === 0) {
      return
    }
    const {data} = await apiService.fetchApps(newAppIds)
    const apps = data.results.map(transformAppData)
    dispatch({
      type: FETCH_APPS,
      data: apps
    })
  }
}
