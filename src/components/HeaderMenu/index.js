import React from 'react' // eslint-disable-line no-unused-vars
import {Layout} from 'antd'
import css from 'styles/variables'

import SearchBar from './SearchBar'

const {Header} = Layout

const HeaderMenu = () => (
  <Header
    style={{
      position: 'fixed',
      zIndex: 1,
      width: '100%',
      background: css.grey200,
      height: '46px',
      lineHeight: '46px',
      padding: '0 8px'
    }}
  >
    <SearchBar />
  </Header>
)

export default HeaderMenu
