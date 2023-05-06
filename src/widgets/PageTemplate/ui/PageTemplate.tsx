import { FC, ReactNode, memo } from 'react'

import { Footer } from 'widgets/Footer'
import { Header } from 'widgets/Header'

import classes from './PageTemplate.module.scss'

interface PageTemplateProps {
  children: ReactNode
}

export const PageTemplate: FC<PageTemplateProps> = memo((props) => {
  const { children } = props
  return (
    <div className={classes.PageTemplate}>
      <Header />
      <div className={classes.PageContent}>{children}</div>
      <Footer />
    </div>
  )
})
