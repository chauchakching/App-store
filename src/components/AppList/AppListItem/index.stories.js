import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'
import AppListItem from '../AppListItem'

storiesOf('AppListItem', module)
  .add('with some props', () => (
    <AppListItem
      itemNum={1}
      iconUrl={'https://is5-ssl.mzstatic.com/image/thumb/Purple125/v4/46/28/a9/4628a90b-3c15-ffb4-26f4-ddc7674be0ca/AppIcon-1x_U007emarketing-85-220-5.png/100x100bb-85.png'}
      title={'Brawl Stars'}
      genres={['遊戲']}
      averageUserRating={5}
      userRatingCount={3316}
    />
  ))
