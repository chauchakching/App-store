import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import styled from 'styled-components'
import css from 'styles/variables'

import DataFetcher from 'components/DataFetcher'

import {fetchTop10GrossingApps} from 'redux/data/top10GrossingAppIds/actions'
import {getTop10GrossingAppsBySearch} from 'redux/data/selectors'

import HorizontalAppList from './HorizontalAppList'

class AppRecommendation extends React.Component {
  render () {
    return (
      <DataFetcher fetchData={this.fetchData}>
        <AppRecommendationWrapper>
          <Title>
            推介
          </Title>
          <AppList>
            {this.props.top10GrossingApps.length > 0
              ? (
                <HorizontalAppList
                  items={this.props.top10GrossingApps.map(app => ({
                    key: app.id,
                    iconUrl: app.iconUrl,
                    title: app.name,
                    genres: (app.genres || []).slice(0, 1)
                  }))}
                />
              ) : (
                <NoResult>沒有結果</NoResult>
              )
            }
          </AppList>
        </AppRecommendationWrapper>
      </DataFetcher>
    )
  }

  fetchData = () => {
    return this.props.fetchTop10GrossingApps()
  }
}

const AppRecommendationWrapper = styled.div`
  padding-top: ${css.space1x};
  height: 227px;
`

const AppList = styled.div`
  display: flex;
  align-items: center;
  height: 184px;
`

const Title = styled.div`
  font-weight: 600;
  text-align: left;
  font-size: 18px;
  margin-left: ${css.space1x};
  margin-bottom: ${css.space1x};
`

const NoResult = styled.div`
  width: 100%;
`

function mapStateToProps (state) {
  return {
    top10GrossingApps: getTop10GrossingAppsBySearch(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchTop10GrossingApps
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppRecommendation)
