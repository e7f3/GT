import { FC, ImgHTMLAttributes, useMemo } from 'react'

export enum ImageScale {
  '0.5x' = '0,5x',
  '1x' = '1x',
  '2x' = '2x',
  '3x' = '3x',
  '4x' = '4x',
  '5x' = '5x',
}

export type ImageSources = Partial<Record<keyof typeof ImageScale, string>>

interface PictureProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  pngSources?: ImageSources
  webpSources?: ImageSources
  alt: string
  src: string
}

export const Picture: FC<PictureProps> = (props) => {
  const { className, pngSources, webpSources, alt, src, ...restProps } = props

  const pngSrc = useMemo(() => {
    if (!pngSources) {
      return ''
    }
    return Object.entries(pngSources)
      .map((sourceTuple) => {
        const [scale, source] = sourceTuple as [keyof typeof ImageScale, string]
        return `${source} ${scale}`
      })
      .join(' ')
  }, [pngSources])
  const webpSrc = useMemo(() => {
    if (!webpSources) {
      return ''
    }
    return Object.entries(webpSources)
      .map((sourceTuple) => {
        const [scale, source] = sourceTuple as [keyof typeof ImageScale, string]
        return `${source} ${scale}`
      })
      .join(' ')
  }, [webpSources])

  return (
    <picture className={className}>
      <source type='image/webp' srcSet={webpSrc} />
      <source type='image/png' srcSet={pngSrc} />
      <img className={className} src={src} alt={alt} {...restProps} />
    </picture>
  )
}
