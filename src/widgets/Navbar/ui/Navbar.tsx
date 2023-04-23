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
      <Link href='#aboutUs'>{t('aboutUs')}</Link>
      <Link href='#clients'>{t('clients')}</Link>
      <Link href='#services'>{t('services')}</Link>
      <Link href='#workflow'>{t('workflow')}</Link>
      <Link href='#benefits'>{t('benefits')}</Link>
    </div>
  )
})
