import { FC, memo } from 'react'

import LogoPngX1 from 'shared/assets/images/Logo/Logo-x1.png'
import LogoWebpX1 from 'shared/assets/images/Logo/Logo-x1.webp'
import LogoPngX2 from 'shared/assets/images/Logo/Logo-x2.png'
import LogoWebpX2 from 'shared/assets/images/Logo/Logo-x2.webp'
import LogoPngX3 from 'shared/assets/images/Logo/Logo-x3.png'
import LogoWebpX3 from 'shared/assets/images/Logo/Logo-x3.webp'

import classes from './Logo.module.scss'
import { ImageSources, Picture } from '../Picture/Picture'

interface LogoProps {
  className?: string
}

const pngSources: ImageSources = {
  '1x': LogoPngX1,
  '2x': LogoPngX2,
  '3x': LogoPngX3,
}

const webpSources: ImageSources = {
  '1x': LogoWebpX1,
  '2x': LogoWebpX2,
  '3x': LogoWebpX3,
}

export const Logo: FC<LogoProps> = memo((props) => {
  const { className } = props

  return (
    <div className={className}>
      <Picture
        className={classes.Logo}
        src={LogoPngX1}
        pngSources={pngSources}
        webpSources={webpSources}
        alt='GTIT'
      />
    </div>
  )
})
