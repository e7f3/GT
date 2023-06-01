import emailjs from '@emailjs/browser'
import {
  FC,
  FormEvent,
  MouseEvent,
  memo,
  useCallback,
  useRef,
  useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonColorScheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import classes from './ContactForm.module.scss'

interface ContactFormProps {
  className?: string
  id?: string
}

const SERVICE_KEY = process.env.EMAILJS_SERVICE_KEY || ''
const TEMPLATE_KEY = process.env.EMAILJS_TEMPLATE_KEY || ''
const PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || ''

export const ContactForm: FC<ContactFormProps> = memo((props) => {
  const { className, id } = props
  const { t } = useTranslation()
  const formRef = useRef<HTMLFormElement>(null)

  const [value, setValue] = useState<string>('')

  const onChange = useCallback((newValue: string) => setValue(newValue), [])

  const onClick = useCallback((event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      if (formRef.current) {
        emailjs.sendForm(
          SERVICE_KEY,
          TEMPLATE_KEY,
          event.target as HTMLFormElement,
          PUBLIC_KEY
        )
      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <form
      className={classNames(classes.ContactForm, {}, [className])}
      id={id}
      ref={formRef}
      onSubmit={onClick}
    >
      <Input
        className={classes.ContactFormInput}
        placeholder={t('emailInputPlaceholder')}
        onChange={onChange}
        value={value}
        name="email"
      />
      <Button
        className={classes.ContactFormButton}
        colorScheme={ButtonColorScheme.ALTERNATIVE}
        type="submit"
      >
        {t('submitButton')}
      </Button>
    </form>
  )
})
