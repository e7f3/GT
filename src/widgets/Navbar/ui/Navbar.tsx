import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Link } from 'shared/ui/Link/Link'

import classes from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(classes.Navbar, {}, [className])}>
      <Link href='#aboutUs'>{t('aboutUsNavbarLink')}</Link>
      <Link href='#clients'>{t('clientsNavbarLink')}</Link>
      <Link href='#services'>{t('servicesNavbarLink')}</Link>
      <Link href='#workflow'>{t('workflowNavbarLink')}</Link>
      <Link href='#benefits'>{t('benefitsNavbarLink')}</Link>
      <Link href='#contact'>{t('contactNavbarLink')}</Link>
    </div>
  )
})
