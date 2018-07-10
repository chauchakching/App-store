
import {createSelector} from 'reselect'
import {pathOr, filter, compose, any, toLower, uniqBy, prop} from 'ramda'

import {getApps} from 'redux/data/apps/selectors'
import {getTop100FreeAppIds} from 'redux/data/top100FreeAppIds/selectors'
import {getTop10GrossingAppIds} from 'redux/data/top10GrossingAppIds/selectors'
import {getSearchText} from 'redux/data/search/selectors'

export const getTop100FreeApps = createSelector([
  getApps, getTop100FreeAppIds
], (apps, top100FreeAppIds) => {
  return top100FreeAppIds.map(appId => apps.find(app => app.id === appId) || {})
})

export const getTop10GrossingApps = createSelector([
  getApps, getTop10GrossingAppIds
], (apps, top10GrossingAppIds) => {
  return top10GrossingAppIds.map(appId => apps.find(app => app.id === appId) || {})
})

export const filterAppsBySearchGenerator = createSelector([
  getSearchText
], searchText => apps => {
  if (!searchText) {
    return apps
  }
  const lowercaseSearchText = toLower(searchText)
  const includesSearchText = str => str.includes(lowercaseSearchText)

  const filteredApps = uniqBy(prop('id'))([
    ...filter(compose(
      includesSearchText,
      toLower,
      pathOr('', ['name'])
    ))(apps),

    ...filter(compose(
      includesSearchText,
      toLower,
      pathOr('', ['author'])
    ))(apps),

    ...filter(compose(
      any(compose(
        includesSearchText,
        toLower
      )),
      pathOr([], ['genres'])
    ))(apps),

    ...filter(compose(
      includesSearchText,
      toLower,
      pathOr('', ['description'])
    ))(apps)
  ])
  return filteredApps
})

export const getTop100FreeAppsBySearch = createSelector([
  getTop100FreeApps, filterAppsBySearchGenerator
], (apps, filterAppsBySearch) => {
  return filterAppsBySearch(apps)
})

export const getTop10GrossingAppsBySearch = createSelector([
  getTop10GrossingApps, filterAppsBySearchGenerator
], (apps, filterAppsBySearch) => {
  return filterAppsBySearch(apps)
})
