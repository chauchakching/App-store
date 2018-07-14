import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import css from 'styles/variables'

import LoadingOverlay from 'components/LoadingOverlay'
import AppIcon from 'components/AppIcon'

import Rating from './Rating'

class AppListItem extends React.Component {
  static propTypes = {
    itemNum: PropTypes.number,

    iconUrl: PropTypes.string,
    roundCornerIcon: PropTypes.bool,
    roundIcon: PropTypes.bool,

    title: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
    averageUserRating: PropTypes.number,
    userRatingCount: PropTypes.number
  }

  static defaultProps = {
    genres: []
  }

  render () {
    return (
      <LoadingOverlay loading={this.props.loading}>
        <ItemBox>
          <ItemNumber>
            {this.props.itemNum}
          </ItemNumber>

          <AppIcon
            src={this.props.iconUrl}
            roundCornerIcon={this.props.roundCornerIcon}
            roundIcon={this.props.roundIcon}
            small
          />

          <ItemOverviewWrapper>

            <ItemOverviewTitle>
              {this.props.title}
            </ItemOverviewTitle>

            <ItemOverviewSubtitle>
              {this.props.genres.join(', ')}
            </ItemOverviewSubtitle>

            {(this.props.averageUserRating || this.props.userRatingCount) && (
              <Rating
                averageUserRating={this.props.averageUserRating}
                userRatingCount={this.props.userRatingCount}
              />
            )}

          </ItemOverviewWrapper>
        </ItemBox>
      </LoadingOverlay>
    )
  }
}

const ItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${css.space1x} 0;
  border-top: solid 1px ${css.grey200};
`

const ItemNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${css.space05x};
  width: 34px;
  font-size: 19px;
  color: ${css.grey500};
`

const ItemOverviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin: ${css.space1x};
`

const ItemOverviewTitle = styled.div`
  font-weight: 600;
`

const ItemOverviewSubtitle = styled.div`
  color: ${css.grey500};
  font-size: ${css.sizeExtraSmall};
`

export default AppListItem
