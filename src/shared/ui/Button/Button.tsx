import { ButtonHTMLAttributes, FC, ReactNode, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Button.module.scss'

export enum ButtonTheme {
  'DEFAULT' = 'defaultTheme',
  'INVERTED' = 'invertedTheme',
}

export enum ButtonColorScheme {
  'DEFAULT' = 'defaultColorScheme',
  'ALTERNATIVE' = 'alternativeColorScheme',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
  className?: string
  theme?: ButtonTheme
  colorScheme?: ButtonColorScheme
}

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    children,
    className,
    theme = ButtonTheme.DEFAULT,
    colorScheme = ButtonColorScheme.DEFAULT,
    ...restProps
  } = props

  return (
    <button
      className={classNames(classes.Button, {}, [
        classes[theme],
        classes[colorScheme],
        className,
      ])}
      type='button'
      {...restProps}
    >
      {children}
    </button>
  )
})
