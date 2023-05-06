import { FC, memo, useMemo } from 'react'

import LogoX1 from 'shared/assets/icons/Logo-x1.png'
import LogoX2 from 'shared/assets/icons/Logo-x2.png'
import LogoX3 from 'shared/assets/icons/Logo-x3.png'
import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Logo.module.scss'

interface LogoProps {
  className?: string
}

export const Logo: FC<LogoProps> = memo((props) => {
  const { className } = props
  const sourceSrc = useMemo(() => `${LogoX2} 2x ${LogoX3} 3x`, [])

  return (
    <picture className={classNames(classes.Logo, {}, [className])}>
      <source type='image/png' srcSet={sourceSrc} />
      <img className={classes.Logo} src={LogoX1} alt='GTIT' />
    </picture>
  )
})
