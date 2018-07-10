import React from 'react'
import PropTypes from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {prop} from 'ramda'

import {fetchAppByIds} from 'redux/data/apps/actions'
import {fetchTop100FreeAppIds} from 'redux/data/top100FreeAppIds/actions'
import {getTop100FreeAppsBySearch} from 'redux/data/selectors'
import {getSearchText} from 'redux/data/search/selectors'

import AppListItem from './AppListItem'
import Pagination from './Pagination'

const itemsPerPage = 10

class AppList extends React.Component {
  static propTypes = {
    items: PropTypes.array
  }

  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      loading: true
    }
  }

  async componentDidMount () {
    await this.props.fetchTop100FreeAppIds()
    await this.fetchAppDataByPage()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.page !== this.state.page || prevProps.searchText !== this.props.searchText) {
      this.fetchAppDataByPage()
    }
    if (prevProps.searchText !== this.props.searchText) {
      this.setState({
        page: 1
      })
    }
  }

  render () {
    const {page} = this.state

    return (
      <div>
        {this.getPageItems().map((app, index) => {
          const itemNum = (page - 1) * itemsPerPage + (index + 1)
          return (
            <AppListItem
              key={app.id}
              itemNum={itemNum}
              iconUrl={app.iconUrl}
              roundCornerIcon={isOdd(itemNum)}
              roundIcon={isEven(itemNum)}
              title={app.name}
              genres={app.genres}
              averageUserRating={app.averageUserRating}
              userRatingCount={app.userRatingCount}
              loading={this.state.loading}
            />
          )
        })}

        {this.props.top100FreeApps.length > itemsPerPage && (
          <Pagination
            page={this.state.page}
            maxPage={this.getMaxPage()}
            goPreviousPage={this.goPreviousPage}
            goNextPage={this.goNextPage}
          />
        )}
      </div>
    )
  }

  getPageItems () {
    return this.sliceByPage(this.props.top100FreeApps)
  }

  async fetchAppDataByPage () {
    const appIdsInPage = this.sliceByPage(this.props.top100FreeApps).map(prop('id'))

    this.startLoading()
    await this.props.fetchAppByIds(appIdsInPage)
    this.stopLoading()
  }

  sliceByPage (items) {
    const {page} = this.state
    return items.slice((page - 1) * itemsPerPage, page * itemsPerPage)
  }

  goPreviousPage = () => {
    this.setState({
      page: Math.max(1, this.state.page - 1)
    })
  }

  goNextPage = () => {
    this.setState({
      page: Math.min(this.getMaxPage(), this.state.page + 1)
    })
  }

  getMaxPage () {
    return Math.ceil(this.props.top100FreeApps.length / itemsPerPage)
  }

  startLoading = () => {
    this.setState({
      loading: true
    })
  }

  stopLoading = () => {
    this.setState({
      loading: false
    })
  }
}

const isEven = n => n % 2 === 0
const isOdd = n => n % 2 === 1

function mapStateToProps (state) {
  return {
    top100FreeApps: getTop100FreeAppsBySearch(state),
    searchText: getSearchText(state)
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    fetchTop100FreeAppIds,
    fetchAppByIds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppList)
