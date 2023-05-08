import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutUs } from 'widgets/AboutUs/ui/AboutUs'
import { MainBanner } from 'widgets/MainBanner'
import { PageTemplate } from 'widgets/PageTemplate'

const MainPage = memo(() => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <MainBanner />
      <AboutUs />
    </PageTemplate>
  )
})

export default MainPage
