import { storiesOf } from '@storybook/react'
import React from 'react'

import Avatar from '.'

storiesOf('Avatar', module)
  .add('default', () => <Avatar />)
  .add('small', () => <Avatar size="100" />)
  .add('large', () => <Avatar size="400" />)
