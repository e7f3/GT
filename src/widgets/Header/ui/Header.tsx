import { FC, memo } from 'react'

import { Logo } from 'shared/ui/Logo/Logo'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Navbar } from 'widgets/Navbar'

import classes from './Header.module.scss'

export const Header: FC = memo(() => {
  return (
    <div className={classes.Header}>
      <Logo />
      <Navbar className={classes.HeaderNavbar} />
      <LanguageSwitcher className={classes.HeaderSwitcher} />
    </div>
  )
})
