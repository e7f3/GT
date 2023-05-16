import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Text } from 'shared/ui/Text/Text'
import { Title, TitleVariant } from 'shared/ui/Title/Title'

import classes from './OurBenefits.module.scss'

type Benefit = {
  titleKey: string
  textKey: string
}

const benefits: Benefit[] = [
  {
    titleKey: 'ourBenefitsListItemTitle1',
    textKey: 'ourBenefitsListItemText1',
  },
  {
    titleKey: 'ourBenefitsListItemTitle2',
    textKey: 'ourBenefitsListItemText2',
  },
  {
    titleKey: 'ourBenefitsListItemTitle3',
    textKey: 'ourBenefitsListItemText3',
  },
  {
    titleKey: 'ourBenefitsListItemTitle4',
    textKey: 'ourBenefitsListItemText4',
  },
  {
    titleKey: 'ourBenefitsListItemTitle5',
    textKey: 'ourBenefitsListItemText5',
  },
]

export const OurBenefits: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.OurBenefits} id='benefits'>
      <div className={classes.Header}>
        <Title variant={TitleVariant.H2}>{t('ourBenefitsTitle')}</Title>
      </div>
      <div className={classes.BenefitsWrapper}>
        <ul className={classes.BenefitsList}>
          {benefits.map((benefitObj) => {
            const { titleKey, textKey } = benefitObj
            return (
              <li className={classes.Benefit} key={titleKey}>
                <div className={classes.BenefitHeader}>
                  <h3 className={classes.BenefitTitle}>{t(titleKey)}</h3>
                </div>
                <div className={classes.BenefitBody}>
                  <Text className={classes.BenefitText}>{t(textKey)}</Text>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
})
