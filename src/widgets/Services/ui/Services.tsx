import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, ButtonColorScheme, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { Title, TitleVariant } from 'shared/ui/Title/Title'

import classes from './Services.module.scss'

type Service = {
  titleKey: string
  textKey: string
  priceTitleKey?: string
  priceKey: string
  priceTextPrefixKey?: string
  priceTextKey: string
  buttonKey: string
}

const services: Service[] = [
  {
    titleKey: 'serviceCardTitle1',
    textKey: 'serviceCardText1',
    priceKey: 'serviceCardPrice1',
    priceTextPrefixKey: 'serviceCardPriceTextPrefix1',
    priceTextKey: 'serviceCardPriceText1',
    buttonKey: 'serviceCardButtonText1',
  },
  {
    titleKey: 'serviceCardTitle2',
    textKey: 'serviceCardText2',
    priceKey: 'serviceCardPrice2',
    priceTextPrefixKey: 'serviceCardPriceTextPrefix2',
    priceTextKey: 'serviceCardPriceText2',
    buttonKey: 'serviceCardButtonText2',
  },
  {
    titleKey: 'serviceCardTitle3',
    textKey: 'serviceCardText3',
    priceTitleKey: 'serviceCardPriceTitle3',
    priceKey: 'serviceCardPrice3',
    priceTextPrefixKey: 'serviceCardPriceTextPrefix3',
    priceTextKey: 'serviceCardPriceText3',
    buttonKey: 'serviceCardButtonText3',
  },
]

export const Services: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.Services} id='services'>
      <div className={classes.Header}>
        <Title className={classes.Title} variant={TitleVariant.H2}>
          {t('servicesTitle')}
        </Title>
        <Text className={classes.Text}>{t('servicesText')}</Text>
      </div>
      <div className={classes.Cards}>
        {services.map((service) => {
          const {
            titleKey,
            textKey,
            priceTitleKey,
            priceKey,
            priceTextPrefixKey,
            priceTextKey,
            buttonKey,
          } = service
          return (
            <div className={classes.Card} key={titleKey}>
              <div className={classes.CardInfo}>
                <div className={classes.CardTitle}>{`./${t(titleKey)}`}</div>
                <Text className={classes.CardText}>{t(textKey)}</Text>
              </div>
              <div className={classes.CardPrice}>
                {priceTitleKey && (
                  <div className={classes.CardPriceTitle}>
                    {t(priceTitleKey)}
                  </div>
                )}
                <div className={classes.CardPriceAmount}>{t(priceKey)}</div>

                <div className={classes.CardPriceText}>
                  {priceTextPrefixKey && (
                    <span className={classes.CardPriceTextPrefix}>
                      {t(priceTextPrefixKey)}
                    </span>
                  )}
                  <span>{t(priceTextKey)}</span>
                </div>
                <a className={classes.CardLink} href='#contact'>
                  <Button
                    className={classes.CardButton}
                    theme={ButtonTheme.DEFAULT}
                  >
                    {t(buttonKey)}
                  </Button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
      <div className={classes.Footer}>
        <div className={classes.FooterText}>{t('servicesFooterText')}</div>
        <a className={classes.FooterLink} href='#contact'>
          <Button
            className={classes.FooterButton}
            colorScheme={ButtonColorScheme.ALTERNATIVE}
          >
            {t('servicesFooterButton')}
          </Button>
        </a>
      </div>
    </div>
  )
})
