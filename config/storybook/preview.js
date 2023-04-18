import { addDecorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import { ValidateProfileError } from 'entities/Profile/model/types/profileSchema'

import { I18NextDecorator } from 'shared/config/storybook/I18NextDecorator/I18NextDecorator'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { SuspenseDecorator } from 'shared/config/storybook/SuspenseDecorator/SuspenseDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  locale: 'en',
  locales: {
    ru: 'Russian',
    en: 'English',
    es: 'Spanish',
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
        { value: 'es', title: 'Spanish' },
      ],
      showName: true,
    },
  },
}

addDecorator(StyleDecorator)
// addDecorator(SuspenseDecorator)
addDecorator(I18NextDecorator)
