import { addDecorator } from '@storybook/react'

import { Theme } from 'app/providers/ThemeProvider'
import { ValidateProfileError } from 'entities/Profile/model/types/profileSchema'
import { I18NextDecorator } from 'shared/config/storybook/I18NextDecorator/I18NextDecorator'
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator'
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator/StoreProviderDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'ru',
  locales: {
    ru: 'Russian',
    en: 'English',
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'ru', title: 'Russian' },
        { value: 'en', title: 'English' },
      ],
      showName: true,
    },
  },
}

addDecorator(
  StoreProviderDecorator({
    profile: {},
    loginForm: {},
    user: {},
  })
)
addDecorator(RouterDecorator)
addDecorator(StyleDecorator)
// addDecorator(SuspenseDecorator)
addDecorator(I18NextDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
