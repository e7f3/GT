import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import AboutUs1PngX1 from 'shared/assets/images/AboutUs/AboutUsImage1-x1.png'
import AboutUs1WebpX1 from 'shared/assets/images/AboutUs/AboutUsImage1-x1.webp'
import AboutUs1PngX2 from 'shared/assets/images/AboutUs/AboutUsImage1-x2.png'
import AboutUs1WebpX2 from 'shared/assets/images/AboutUs/AboutUsImage1-x2.webp'
import AboutUs1PngX3 from 'shared/assets/images/AboutUs/AboutUsImage1-x3.png'
import AboutUs1WebpX3 from 'shared/assets/images/AboutUs/AboutUsImage1-x3.webp'
import AboutUs2PngX1 from 'shared/assets/images/AboutUs/AboutUsImage2-x1.png'
import AboutUs2WebpX1 from 'shared/assets/images/AboutUs/AboutUsImage2-x1.webp'
import AboutUs2PngX2 from 'shared/assets/images/AboutUs/AboutUsImage2-x2.png'
import AboutUs2WebpX2 from 'shared/assets/images/AboutUs/AboutUsImage2-x2.webp'
import AboutUs2PngX3 from 'shared/assets/images/AboutUs/AboutUsImage2-x3.png'
import AboutUs2WebpX3 from 'shared/assets/images/AboutUs/AboutUsImage2-x3.webp'
import { Button, ButtonColorScheme } from 'shared/ui/Button/Button'
import { Picture, ImageSources } from 'shared/ui/Picture/Picture'
import { Text } from 'shared/ui/Text/Text'
import { Title, TitleVariant } from 'shared/ui/Title/Title'

import classes from './AboutUs.module.scss'

interface Feature {
  titleKey: string
  textKey: string
}

const pngSources1: ImageSources = {
  '1x': AboutUs1PngX1,
  '2x': AboutUs1PngX2,
  '3x': AboutUs1PngX3,
}
const pngSources2: ImageSources = {
  '1x': AboutUs2PngX1,
  '2x': AboutUs2PngX2,
  '3x': AboutUs2PngX3,
}

const webpSources1: ImageSources = {
  '1x': AboutUs1WebpX1,
  '2x': AboutUs1WebpX2,
  '3x': AboutUs1WebpX3,
}
const webpSources2: ImageSources = {
  '1x': AboutUs2WebpX1,
  '2x': AboutUs2WebpX2,
  '3x': AboutUs2WebpX3,
}

const features1: Feature[] = [
  { titleKey: 'aboutUsFeatureTitle1', textKey: 'aboutUsFeatureText1' },
  { titleKey: 'aboutUsFeatureTitle2', textKey: 'aboutUsFeatureText2' },
  { titleKey: 'aboutUsFeatureTitle3', textKey: 'aboutUsFeatureText3' },
]
const features2: Feature[] = [
  { titleKey: 'aboutUsFeatureTitle4', textKey: 'aboutUsFeatureText4' },
  { titleKey: 'aboutUsFeatureTitle5', textKey: 'aboutUsFeatureText5' },
  { titleKey: 'aboutUsFeatureTitle6', textKey: 'aboutUsFeatureText6' },
]

export const AboutUs: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.AboutUs} id='aboutUs'>
      <div className={classes.Header}>
        <Title className={classes.Title} variant={TitleVariant.H2}>
          {t('aboutUsTitle')}
        </Title>
        <Text className={classes.Text}>{t('aboutUsText')}</Text>
      </div>
      <div className={classes.Info}>
        <div className={classes.ImageWrapper}>
          <Picture
            className={classes.Image}
            src={AboutUs1PngX1}
            pngSources={pngSources1}
            webpSources={webpSources1}
            alt='about us ascii art #1'
          />
        </div>

        <div className={classes.Features}>
          {features1.map(({ titleKey, textKey }) => {
            return (
              <div className={classes.FeatureCard} key={titleKey}>
                <div className={classes.FeatureHeader}>
                  <h3 className={classes.FeatureTitle}>{t(titleKey)}</h3>
                </div>
                <div className={classes.FeatureBody}>
                  <Text className={classes.FeatureText}>{t(textKey)}</Text>
                </div>
              </div>
            )
          })}
        </div>
        <div className={classes.Features}>
          {features2.map(({ titleKey, textKey }) => {
            return (
              <div className={classes.FeatureCard} key={titleKey}>
                <div className={classes.FeatureHeader}>
                  <h3 className={classes.FeatureTitle}>{t(titleKey)}</h3>
                </div>
                <div className={classes.FeatureBody}>
                  <Text className={classes.FeatureText}>{t(textKey)}</Text>
                </div>
              </div>
            )
          })}
        </div>
        <div className={classes.ImageWrapper}>
          <Picture
            className={classes.Image}
            src={AboutUs2PngX1}
            pngSources={pngSources2}
            webpSources={webpSources2}
            alt='about us ascii art #2'
          />
        </div>
      </div>
      <div className={classes.Footer}>
        <div className={classes.FooterText}>{t('aboutUsFooterText')}</div>
        <a className={classes.FooterLink} href='#contact'>
          <Button
            className={classes.FooterButton}
            colorScheme={ButtonColorScheme.ALTERNATIVE}
          >
            {t('aboutUsFooterButton')}
          </Button>
        </a>
      </div>
    </div>
  )
})
