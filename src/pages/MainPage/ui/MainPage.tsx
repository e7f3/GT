import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import { AboutUs } from 'widgets/AboutUs'
import { MainBanner } from 'widgets/MainBanner'
import { OurBenefits } from 'widgets/OurBenefits'
import { OurClients } from 'widgets/OurClients'
import { PageTemplate } from 'widgets/PageTemplate'
import { Services } from 'widgets/Services'
import { Workflow } from 'widgets/Workflow'

const MainPage = memo(() => {
  const { t } = useTranslation()

  return (
    <PageTemplate>
      <MainBanner />
      <AboutUs />
      <OurClients />
      <Services />
      <Workflow />
      <OurBenefits />
    </PageTemplate>
  )
})

export default MainPage
