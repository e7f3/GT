import { Story } from '@storybook/react'

import classes from './FlexDecorator.module.scss'

export const FlexDecorator = (StoryComponent: Story) => (
  <div className={classes.FlexDecorator}>
    <StoryComponent />
  </div>
)
