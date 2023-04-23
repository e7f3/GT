import { FC, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'shared/ui/Link/Link'

import classes from './Navbar.module.scss'

// interface NavbarProps {}

export const Navbar: FC = memo(() => {
  return (
    <div className={classNames(classes.Navbar)}>
      <Link href='#aboutUs'>About us</Link>
      <Link href='#clients'>Clients</Link>
      <Link href='#services'>Services</Link>
      <Link href='#how'>How do we work</Link>
    </div>
  )
})
