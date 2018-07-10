import React from 'react' // eslint-disable-line no-unused-vars
import {Spin} from 'antd'
import styled from 'styled-components'

const LoadingOverlay = ({loading, children}) => (
  <LoadingOverlayWrapper>
    {loading && (
      <SpinWrapper>
        <Spin
          delay={500}
        />
      </SpinWrapper>
    )}
    {children}
  </LoadingOverlayWrapper>
)

const LoadingOverlayWrapper = styled.div`
  position: relative;
`

const SpinWrapper = styled.div`
  position: absolute;
  
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fffffff0;
  z-index: 1;
`

export default LoadingOverlay
