import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import OurClientsPngX1 from 'shared/assets/images/OurClients/OurClientsImage-x1.png'
import OurClientsWebpX1 from 'shared/assets/images/OurClients/OurClientsImage-x1.webp'
import OurClientsPngX2 from 'shared/assets/images/OurClients/OurClientsImage-x2.png'
import OurClientsWebpX2 from 'shared/assets/images/OurClients/OurClientsImage-x2.webp'
import OurClientsPngX3 from 'shared/assets/images/OurClients/OurClientsImage-x3.png'
import OurClientsWebpX3 from 'shared/assets/images/OurClients/OurClientsImage-x3.webp'
import { ImageSources, Picture } from 'shared/ui/Picture/Picture'
import { Text } from 'shared/ui/Text/Text'
import { Title, TitleVariant } from 'shared/ui/Title/Title'

import classes from './OurClients.module.scss'

type Client = {
  textKey: string
}

const pngSources: ImageSources = {
  '1x': OurClientsPngX1,
  '2x': OurClientsPngX2,
  '3x': OurClientsPngX3,
}

const webpSources: ImageSources = {
  '1x': OurClientsWebpX1,
  '2x': OurClientsWebpX2,
  '3x': OurClientsWebpX3,
}

const clients: Client[] = [
  { textKey: 'ourClientsListItem1' },
  { textKey: 'ourClientsListItem2' },
  { textKey: 'ourClientsListItem3' },
  { textKey: 'ourClientsListItem4' },
  { textKey: 'ourClientsListItem5' },
  { textKey: 'ourClientsListItem6' },
  { textKey: 'ourClientsListItem7' },
  { textKey: 'ourClientsListItem8' },
  { textKey: 'ourClientsListItem9' },
]

export const OurClients: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.OurClients} id='clients'>
      <div className={classes.Header}>
        <Title className={classes.Title} variant={TitleVariant.H2}>
          {t('ourClientsTitle')}
        </Title>
        <Text className={classes.Text}>{t('ourClientsText')}</Text>
      </div>
      <div className={classes.AsciiBorder}>
        <div className={classes.ClientsListWrapper}>
          <div className={classes.ClientsListContent}>
            <h3 className={classes.ClientsListTitle}>
              {t('ourClientsListTitle')}
            </h3>
            <ol className={classes.ClientsList}>
              {clients.map((client) => {
                const { textKey } = client
                return (
                  <li className={classes.ListItem} key={textKey}>
                    <div className={classes.Client}>{t(textKey)}</div>
                  </li>
                )
              })}
            </ol>
          </div>

          <Picture
            className={classes.Image}
            src={OurClientsPngX1}
            pngSources={pngSources}
            webpSources={webpSources}
            alt='our clients ascii art'
          />
        </div>
      </div>
    </div>
  )
})
