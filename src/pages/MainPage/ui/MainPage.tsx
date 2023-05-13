import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutUs } from 'widgets/AboutUs'
import { MainBanner } from 'widgets/MainBanner'
import { OurClients } from 'widgets/OurClients'
import { PageTemplate } from 'widgets/PageTemplate'
import { Services } from 'widgets/Services'

const MainPage = memo(() => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <MainBanner />
      <AboutUs />
      <OurClients />
      <Services />
    </PageTemplate>
  )
})

export default MainPage
