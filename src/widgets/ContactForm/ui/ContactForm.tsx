import { FC, memo, useCallback, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonColorScheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import classes from './ContactForm.module.scss'

interface ContactFormProps {
  className?: string
}

export const ContactForm: FC<ContactFormProps> = memo((props) => {
  const { className } = props
  const { t } = useTranslation()

  const [value, setValue] = useState<string>('')

  const onChange = useCallback((newValue: string) => setValue(newValue), [])
  const onClick = useCallback(() => {
    console.log(value)
  }, [value])

  return (
    <div className={classNames(classes.ContactForm, {}, [className])}>
      <Input
        className={classes.ContactFormInput}
        placeholder={t('emailInputPlaceholder')}
        onChange={onChange}
      />
      <Button
        className={classes.ContactFormButton}
        colorScheme={ButtonColorScheme.ALTERNATIVE}
        onClick={onClick}
      >
        {t('submitButton')}
      </Button>
    </div>
  )
})
