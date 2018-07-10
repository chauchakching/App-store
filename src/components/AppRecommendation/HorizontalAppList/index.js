import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import ScrollArea from 'react-scrollbar'
import css from 'styles/variables'

import AppListSmallItem from 'components/AppListSmallItem'

class HorizontalAppList extends React.Component {
  static propTypes = {
    items: PropTypes.array
  }

  render () {
    return (
      <ScrollArea
        contentStyle={{
          width: `calc(126px * ${this.props.items.length})`,
          minWidth: '100%',
          marginBottom: css.space1x
        }}
        minScrollSize={40}
      >
        {this.props.items.length > 0
          ? (
            this.props.items.map(item => (
              <HorizontalAppListItemWrapper key={item.key}>
                <AppListSmallItem
                  {...item}
                />
              </HorizontalAppListItemWrapper>
            ))
          ) : '沒有結果'
        }
      </ScrollArea>
    )
  }
}

const HorizontalAppListItemWrapper = styled.div`
  float: left;
`

export default HorizontalAppList
