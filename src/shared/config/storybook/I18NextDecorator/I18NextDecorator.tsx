import { Story, StoryContext } from '@storybook/react'
import { Suspense, useEffect } from 'react'
import { I18nextProvider } from 'react-i18next'

import i18nForStorybook from 'shared/config/i18n/i18nForStorybook'

export const I18NextDecorator = (
  StoryComponent: Story,
  { globals }: StoryContext
) => {
  const { locale } = globals

  // When the locale global changes
  // Set the new locale in i18n
  useEffect(() => {
    i18nForStorybook.changeLanguage(locale)
  }, [locale])

  return (
    <Suspense fallback=''>
      <I18nextProvider i18n={i18nForStorybook}>
        <StoryComponent />
      </I18nextProvider>
    </Suspense>
  )
}
