import React from 'react' // eslint-disable-line no-unused-vars
import styled from 'styled-components'

const AppIcon = ({src, roundCornerIcon, roundIcon, small}) => {
  const IconWrapper = small ? SmallIconWrapper : RegularIconWrapper
  return (
    <IconWrapper>
      <IconImg
        src={src}
        style={{
          ...(roundCornerIcon && {
            borderRadius: '25px'
          }),
          ...(roundIcon && {
            borderRadius: '50px'
          })
        }}
      />
    </IconWrapper>
  )
}

const RegularIconWrapper = styled.div`
  height: 100px;
  width: 100px;
`

const SmallIconWrapper = styled.div`
  height: 70px;
  width: 70px;
`

const IconImg = styled.img`
  height: 100%;
  width: 100%;
`

export default AppIcon
