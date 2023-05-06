import { FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import FooterImageX1 from 'shared/assets/images/FooterImage-x1.png'
import FooterImageX2 from 'shared/assets/images/FooterImage-x2.png'
import FooterImageX3 from 'shared/assets/images/FooterImage-x3.png'
import { Link } from 'shared/ui/Link/Link'
import { Logo } from 'shared/ui/Logo/Logo'
import { ContactForm } from 'widgets/ContactForm'

import classes from './Footer.module.scss'

export const Footer: FC = memo(() => {
  const { t } = useTranslation()

  const sourceSrc = useMemo(() => `${FooterImageX2} 2x ${FooterImageX3} 3x`, [])

  return (
    <div className={classes.Footer}>
      <div className={classes.FooterContacts}>
        <h2 className={classes.FooterTitle}>{t('footerTitle')}</h2>
        <div className={classes.FooterText}>{t('footerText')}</div>
        <ContactForm className={classes.FooterForm} />
      </div>
      <ul className={classes.FooterLinks}>
        <li className={classes.FooterLinkWrapper}>
          Email: <Link href='mailto:gtit@gmail.com'>gtit@gmail.com</Link>
        </li>
        <li className={classes.FooterLinkWrapper}>
          Telegram: <Link href='/'>@giit</Link>
        </li>
        <li className={classes.FooterLinkWrapper}>any other contact</li>
      </ul>
      <div className={classes.FooterImageWrapper}>
        <picture className={classes.FooterImage}>
          <source type='image/png' srcSet={sourceSrc} />
          <img
            className={classes.FooterImage}
            src={FooterImageX1}
            alt='footer ascii art'
          />
        </picture>
      </div>

      <div className={classes.FooterLogo}>
        <Logo />
        <div className={classes.FooterYear}>{t('footerYear')}</div>
      </div>
    </div>
  )
})
