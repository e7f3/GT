import { FC, LinkHTMLAttributes, ReactNode, memo } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Link.module.scss'

interface LinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
  className?: string
}

export const Link: FC<LinkProps> = memo((props) => {
  const { href, children, className, ...restProps } = props
  return (
    <a
      className={classNames(classes.Link, {}, [className])}
      href={href}
      {...restProps}
    >
      {children}
    </a>
  )
})
