import { FC, memo } from 'react'
import { useTranslation } from 'react-i18next'

import HeaderImagePngX1 from 'shared/assets/images/FooterImage/FooterImage-x1.png'
import HeaderImageWebpX1 from 'shared/assets/images/FooterImage/FooterImage-x1.webp'
import HeaderImagePngX2 from 'shared/assets/images/FooterImage/FooterImage-x2.png'
import HeaderImageWebpX2 from 'shared/assets/images/FooterImage/FooterImage-x2.webp'
import HeaderImagePngX3 from 'shared/assets/images/FooterImage/FooterImage-x3.png'
import HeaderImageWebpX3 from 'shared/assets/images/FooterImage/FooterImage-x3.webp'
import WorkflowPngX1 from 'shared/assets/images/Workflow/WorkflowImage-x1.png'
import WorkflowWebpX1 from 'shared/assets/images/Workflow/WorkflowImage-x1.webp'
import WorkflowPngX2 from 'shared/assets/images/Workflow/WorkflowImage-x2.png'
import WorkflowWebpX2 from 'shared/assets/images/Workflow/WorkflowImage-x2.webp'
import WorkflowPngX3 from 'shared/assets/images/Workflow/WorkflowImage-x3.png'
import WorkflowWebpX3 from 'shared/assets/images/Workflow/WorkflowImage-x3.webp'
import { Picture, ImageSources } from 'shared/ui/Picture/Picture'
import { Text } from 'shared/ui/Text/Text'
import { Title, TitleVariant } from 'shared/ui/Title/Title'

import classes from './Workflow.module.scss'

const pngSources: ImageSources = {
  '1x': WorkflowPngX1,
  '2x': WorkflowPngX2,
  '3x': WorkflowPngX3,
}

const webpSources: ImageSources = {
  '1x': WorkflowWebpX1,
  '2x': WorkflowWebpX2,
  '3x': WorkflowWebpX3,
}

const headerPngSources: ImageSources = {
  '1x': HeaderImagePngX1,
  '2x': HeaderImagePngX2,
  '3x': HeaderImagePngX3,
}

const headerWebpSources: ImageSources = {
  '1x': HeaderImageWebpX1,
  '2x': HeaderImageWebpX2,
  '3x': HeaderImageWebpX3,
}

type Principle = {
  titleKey: string
  textKey: string
}

const principles: Principle[] = [
  {
    titleKey: 'workflowPrincipleTitle1',
    textKey: 'workflowPrincipleText1',
  },
  {
    titleKey: 'workflowPrincipleTitle2',
    textKey: 'workflowPrincipleText2',
  },
  {
    titleKey: 'workflowPrincipleTitle3',
    textKey: 'workflowPrincipleText3',
  },
  {
    titleKey: 'workflowPrincipleTitle4',
    textKey: 'workflowPrincipleText4',
  },
]

export const Workflow: FC = memo(() => {
  const { t } = useTranslation()
  return (
    <div className={classes.Workflow} id='workflow'>
      <div className={classes.Header}>
        <Title variant={TitleVariant.H2}>{t('workflowTitle')}</Title>
        <Text className={classes.Text}>{t('workflowText')}</Text>
        <Picture
          className={classes.HeaderImage}
          src={HeaderImagePngX1}
          pngSources={headerPngSources}
          webpSources={headerWebpSources}
          alt='workflow header ascii art'
        />
      </div>
      <div className={classes.PrinciplesWrapper}>
        <ul className={classes.PrinciplesList}>
          {principles.map((principleObj) => {
            const { titleKey, textKey } = principleObj
            return (
              <li className={classes.Principle} key={titleKey}>
                <div className={classes.PrincipleHeader}>
                  <h3 className={classes.PrincipleTitle}>{t(titleKey)}</h3>
                </div>
                <div className={classes.PrincipleBody}>
                  <Text>{t(textKey)}</Text>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={classes.WorkflowImageWrapper}>
        <Picture
          className={classes.WorkflowImage}
          src={WorkflowPngX1}
          pngSources={pngSources}
          webpSources={webpSources}
          alt='workflow ascii art'
        />
      </div>
    </div>
  )
})
