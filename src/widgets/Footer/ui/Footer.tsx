import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import FooterImagePngX1 from 'shared/assets/images/FooterImage/FooterImage-x1.png'
import FooterImageWebpX1 from 'shared/assets/images/FooterImage/FooterImage-x1.webp'
import FooterImagePngX2 from 'shared/assets/images/FooterImage/FooterImage-x2.png'
import FooterImageWebpX2 from 'shared/assets/images/FooterImage/FooterImage-x2.webp'
import FooterImagePngX3 from 'shared/assets/images/FooterImage/FooterImage-x3.png'
import FooterImageWebpX3 from 'shared/assets/images/FooterImage/FooterImage-x3.webp'
import { Link } from 'shared/ui/Link/Link'
import { Logo } from 'shared/ui/Logo/Logo'
import { Picture, ImageSources } from 'shared/ui/Picture/Picture'
import { Title, TitleVariant } from 'shared/ui/Title/Title'
import { ContactForm } from 'widgets/ContactForm'

import classes from './Footer.module.scss'

const pngSources: ImageSources = {
  '1x': FooterImagePngX1,
  '2x': FooterImagePngX2,
  '3x': FooterImagePngX3,
}

const webpSources: ImageSources = {
  '1x': FooterImageWebpX1,
  '2x': FooterImageWebpX2,
  '3x': FooterImageWebpX3,
}

export const Footer: FC = memo(() => {
  const { t } = useTranslation()

  return (
    <div className={classes.Footer} id='contact'>
      <div className={classes.FooterContacts}>
        <Title className={classes.FooterTitle} variant={TitleVariant.H2}>
          {t('footerTitle')}
        </Title>
        <div className={classes.FooterText}>{t('footerText')}</div>
        <ContactForm className={classes.FooterForm} />
      </div>
      <ul className={classes.FooterLinks}>
        <li className={classes.FooterLinkWrapper}>
          Email: <Link href='mailto:gtit@gmail.com'>gtit@gmail.com</Link>
        </li>
        <li className={classes.FooterLinkWrapper}>
          Telegram: <Link href='https://t.me/gtitorg'>@gtit</Link>
        </li>
        <li className={classes.FooterLinkWrapper}>any other contact</li>
      </ul>
      <div className={classes.FooterImageWrapper}>
        <Picture
          className={classes.FooterImage}
          src={FooterImagePngX1}
          pngSources={pngSources}
          webpSources={webpSources}
          alt='footer ascii art'
        />
      </div>

      <div className={classes.FooterLogo}>
        <Logo />
        <div className={classes.FooterYear}>{t('footerYear')}</div>
      </div>
    </div>
  )
})
