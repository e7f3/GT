import { FC, ReactNode, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Text.module.scss'

interface TextProps {
  className?: string
  children?: ReactNode
}

export const Text: FC<TextProps> = memo((props) => {
  const { className, children } = props
  return (
    <div className={classNames(classes.Text, {}, [className])}>{children}</div>
  )
})
