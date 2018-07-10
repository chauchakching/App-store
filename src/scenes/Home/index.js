import React from 'react'
import {Layout} from 'antd'

import AppRecommendation from 'components/AppRecommendation'
import AppList from 'components/AppList'
import HeaderMenu from 'components/HeaderMenu'

const {Content} = Layout

class Home extends React.Component {
  render () {
    return (
      <Layout>
        <HeaderMenu />
        <Content style={{marginTop: 46}}>
          <AppRecommendation />
          <AppList />
        </Content>
      </Layout>
    )
  }
}

export default Home
