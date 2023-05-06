import { FC, lazy } from 'react'

export const MainPageAsync = lazy<FC>(() => import('./MainPage'))
