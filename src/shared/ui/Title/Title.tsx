import { FC, ReactNode, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Title.module.scss'

interface TitleProps {
  className?: string
  variant?: TitleVariant
  children?: ReactNode
}

export enum TitleVariant {
  'H1' = 'h1',
  'H2' = 'h2',
  'H3' = 'h3',
  'H4' = 'h4',
  'H5' = 'h5',
  'H6' = 'h6',
}

export const Title: FC<TitleProps> = memo((props) => {
  const { className, variant, children } = props

  switch (variant) {
    case TitleVariant.H1:
      return (
        <h1
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h1>
      )
    case TitleVariant.H2:
      return (
        <h2
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h2>
      )
    case TitleVariant.H3:
      return (
        <h3
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h3>
      )
    case TitleVariant.H4:
      return (
        <h4
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h4>
      )
    case TitleVariant.H5:
      return (
        <h5
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h5>
      )
    case TitleVariant.H6:
      return (
        <h6
          className={classNames(classes.Title, {}, [
            classes[variant],
            className,
          ])}
        >
          {children}
        </h6>
      )
    default:
      return <div className={classNames(classes.Title, {}, [])}>{children}</div>
  }
})
