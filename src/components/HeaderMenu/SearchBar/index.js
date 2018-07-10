import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Input} from 'antd'

import {search} from 'redux/data/search/actions'

const Search = Input.Search

class SearchBar extends React.Component {
  render () {
    return (
      <Search
        placeholder='搜尋'
        style={{
          width: '100%',
          maxWidth: '500px'
        }}
        onChange={this.onChange}
      />
    )
  }

  onChange = e => this.props.search(e.target.value)
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    search
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
