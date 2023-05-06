import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { MainBanner } from 'widgets/MainBanner'
import { PageTemplate } from 'widgets/PageTemplate'

const MainPage = memo(() => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <MainBanner />
    </PageTemplate>
  )
})

export default MainPage
