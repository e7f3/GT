import emailjs from '@emailjs/browser'
import { FC, FormEvent, memo, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonColorScheme } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

import classes from './ContactForm.module.scss'

import Checkmark from 'shared/assets/images/FooterCheckmark/Checkmark.png'

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
  const [showCheckmark, setShowCheckmark] = useState<boolean>(false)

  const onChange = useCallback((newValue: string) => setValue(newValue), [])

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      if (formRef.current) {
        emailjs
          .sendForm(
            SERVICE_KEY,
            TEMPLATE_KEY,
            event.target as HTMLFormElement,
            PUBLIC_KEY
          )
          .then(
            (res) => {
              setShowCheckmark(true)
            },
            (err) => {
              console.log('Oops!')
            }
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
      onSubmit={onSubmit}
    >
      <Input
        className={classes.ContactFormInput}
        placeholder={t('emailInputPlaceholder')}
        onChange={onChange}
        value={value}
        name="email"
        type="email"
      />
      {showCheckmark && (
        <img className={classes.Checkmark} src={Checkmark} alt="check" />
      )}
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
