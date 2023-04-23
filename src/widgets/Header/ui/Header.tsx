import { FC, memo, useMemo } from 'react'

import LogoX1 from 'shared/assets/icons/Logo-x1.png'
import LogoX2 from 'shared/assets/icons/Logo-x2.png'
import LogoX3 from 'shared/assets/icons/Logo-x3.png'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Navbar } from 'widgets/Navbar'

import classes from './Header.module.scss'

export const Header: FC = memo(() => {
  const sourceSrc = useMemo(() => `${LogoX2} 2x ${LogoX3} 3x`, [])
  return (
    <div className={classes.Header}>
      <picture className={classes.HeaderLogo}>
        <source type='image/png' srcSet={sourceSrc} />
        <img className={classes.HeaderLogo} src={LogoX1} alt='GTIT' />
      </picture>
      <Navbar className={classes.HeaderNavbar} />
      <LanguageSwitcher className={classes.HeaderSwitcher} />
    </div>
  )
})
