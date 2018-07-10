import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from 'styles/variables'

import AppIcon from 'components/AppIcon'

class AppListSmallItem extends React.Component {
  static propTypes = {
    iconUrl: PropTypes.string,

    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
  }

  static defaultProps = {
    genres: []
  }

  render () {
    return (
      <AppListSmallItemWrapper>
        <AppIconWrapper>
          <AppIcon
            src={this.props.iconUrl}
            roundCornerIcon
          />
        </AppIconWrapper>

        <Title>
          {this.props.title}
        </Title>

        <Genres>
          {this.props.genres.join(', ')}
        </Genres>
      </AppListSmallItemWrapper>
    )
  }
}

const AppListSmallItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${css.space1x};
  width: 110px;
`

const AppIconWrapper = styled.div`
  margin-bottom: ${css.space1x};
`

const Title = styled.div`
  font-weight: 600;
  font-size: ${css.sizeExtraSmall};
`

const Genres = styled.div`
  color: ${css.grey500};
  font-size: ${css.sizeExtraSmall};
`

export default AppListSmallItem
