import React from 'react' // eslint-disable-line no-unused-vars
import {Button, Icon} from 'antd'
import styled from 'styled-components'

import css from 'styles/variables'

const Pagination = ({page, maxPage, goPreviousPage, goNextPage}) => (
  <PaginationWrapper>
    <PageNavigationButton
      onClick={goPreviousPage}
      disabled={page === 1}
    >
      <Icon type="left" />
    </PageNavigationButton>
    <Paging>
      {page} / {maxPage}
    </Paging>
    <PageNavigationButton
      onClick={goNextPage}
      disabled={page === maxPage}
    >
      <Icon type="right" />
    </PageNavigationButton>
  </PaginationWrapper>
)

const PaginationWrapper = styled.div`
  margin: ${css.space2x} 0;
`

const Paging = styled.span`
  margin: 0 ${css.space2x};
  font-size: ${css.sizeNormal};
`

const PageNavigationButton = (props) => (
  <Button
    style={{
      width: '100px'
    }}
    {...props}
  />
)

export default Pagination
