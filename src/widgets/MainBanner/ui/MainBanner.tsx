import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import MainBannerPngX1 from 'shared/assets/images/MainBanner/MainBannerImage-x1.png'
import MainBannerWebpX1 from 'shared/assets/images/MainBanner/MainBannerImage-x1.webp'
import MainBannerPngX2 from 'shared/assets/images/MainBanner/MainBannerImage-x2.png'
import MainBannerWebpX2 from 'shared/assets/images/MainBanner/MainBannerImage-x2.webp'
import MainBannerPngX3 from 'shared/assets/images/MainBanner/MainBannerImage-x3.png'
import MainBannerWebpX3 from 'shared/assets/images/MainBanner/MainBannerImage-x3.webp'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { ImageSources, Picture } from 'shared/ui/Picture/Picture'

import classes from './MainBanner.module.scss'

const pngSources: ImageSources = {
  '1x': MainBannerPngX1,
  '2x': MainBannerPngX2,
  '3x': MainBannerPngX3,
}

const webpSources: ImageSources = {
  '1x': MainBannerWebpX1,
  '2x': MainBannerWebpX2,
  '3x': MainBannerWebpX3,
}

export const MainBanner: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.MainBanner}>
      <div className={classes.BannerInfo}>
        <h1 className={classes.BannerTitle}>{t('mainBannerTitle')}</h1>
        <div className={classes.BannerText}>{t('mainBannerText')}</div>
      </div>
      <div className={classes.BannerButtons}>
        <a className={classes.BannerLink} href='#services'>
          <Button className={classes.BannerButton}>
            {t('mainBannerPlansLink')}
          </Button>
        </a>
        <a className={classes.BannerLink} href='#contact'>
          <Button className={classes.BannerButton} theme={ButtonTheme.INVERTED}>
            {t('mainBannerContactLink')}
          </Button>
        </a>
      </div>
      <div className={classes.BannerImageContainer}>
        <Picture
          className={classes.BannerImage}
          src={MainBannerPngX1}
          pngSources={pngSources}
          webpSources={webpSources}
          alt='Main banner ascii art'
        />
      </div>
    </div>
  )
})
