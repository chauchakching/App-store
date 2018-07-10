import React from 'react'
import LoadingOverlay from 'components/LoadingOverlay'

class DataFetcher extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fetched: false
    }
  }

  async componentDidMount () {
    await this.props.fetchData()
    this.setState({
      fetched: true
    })
  }

  render () {
    return (
      <LoadingOverlay loading={!this.state.fetched}>
        {this.props.children}
      </LoadingOverlay>
    )
  }
}

export default DataFetcher
