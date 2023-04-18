import 'app/styles/index.scss'

import * as ReactDOMClient from 'react-dom/client'

import { App } from 'app/App'
import 'shared/config/i18n/i18n'

const container =
  document.getElementById('root') || document.createElement('div')
const root = ReactDOMClient.createRoot(container)

root.render(<App />)
