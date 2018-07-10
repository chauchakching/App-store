import {compose, path, map, pathEq, find, prop} from 'ramda'

const getAppId = compose(
  parseInt,
  path(['id', 'attributes', 'im:id'])
)

const getName = path(['im:name', 'label'])

const getAuthor = path(['im:artist', 'label'])

const getDescription = path(['summary', 'label'])

const getGenres = compose(
  x => [x],
  path(['category', 'attributes', 'label'])
)

const getIconUrl = compose(
  path(['label']),
  find(pathEq(['attributes', 'height'], '100')),
  prop('im:image')
)

const transformAppData = app => ({
  id: getAppId(app),
  name: getName(app),
  author: getAuthor(app),
  genres: getGenres(app),
  iconUrl: getIconUrl(app),
  description: getDescription(app)
})

const getTransformedAppsFromResponseData = compose(
  map(transformAppData),
  path(['feed', 'entry'])
)

const extractAppIdsFromResponseData = compose(
  map(parseInt),
  map(path(['id', 'attributes', 'im:id'])),
  path(['feed', 'entry'])
)

export default {
  getTransformedAppsFromResponseData,
  extractAppIdsFromResponseData
}
