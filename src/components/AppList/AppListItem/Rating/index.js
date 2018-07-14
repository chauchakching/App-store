import React from 'react' // eslint-disable-line no-unused-vars
import AntRate from 'components/AntRate'
import styled from 'styled-components'
import css from 'styles/variables'

const Rating = ({averageUserRating, userRatingCount}) => (
  <div>
    <AntRate
      value={averageUserRating}
      disabled
      style={{
        fontSize: css.space1x
      }}
    /> {userRatingCount && (
      <RatingCount>({userRatingCount})</RatingCount>
    )}
  </div>
)

const RatingCount = styled.span`
  color: ${css.grey500};
  font-size: ${css.sizeExtraSmall};
`

export default Rating
