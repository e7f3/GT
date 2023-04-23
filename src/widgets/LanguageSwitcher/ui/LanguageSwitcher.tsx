import { ChangeEvent, FC, memo, useCallback, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Mods, classNames } from 'shared/lib/classNames/classNames'

import classes from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = memo((props) => {
  const { className } = props
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState<string>(i18n.language)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleLanguage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const newLang = event.target.value
      setLang(newLang)
      i18n.changeLanguage(newLang)
    },
    [i18n]
  )

  const closeVariants = useCallback(() => setIsOpen(false), [])

  const toggleVariants = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  const variantsMods: Mods = useMemo(
    () => ({
      [classes.VariantsHidden]: !isOpen,
    }),
    [isOpen]
  )

  const buttonMods: Mods = useMemo(
    () => ({
      [classes.ButtonHidden]: isOpen,
    }),
    [isOpen]
  )

  return (
    <div className={classNames(classes.LanguageSwitcher, {}, [className])}>
      <button
        className={classNames(classes.ButtonOpen, buttonMods, [])}
        onClick={toggleVariants}
        type='button'
      >
        {t('currentLanguage')}
      </button>
      <div className={classNames(classes.LanguageVariants, variantsMods, [])}>
        <label className={classes.RadioLabel} htmlFor='language_en'>
          Eng
        </label>
        <input
          defaultChecked={lang === 'en'}
          className={classes.Radio}
          onChange={toggleLanguage}
          onClick={closeVariants}
          type='radio'
          name='language'
          value='en'
          id='language_en'
        />
        <label className={classes.RadioLabel} htmlFor='language_es'>
          Esp
        </label>
        <input
          defaultChecked={lang === 'es'}
          className={classes.Radio}
          onChange={toggleLanguage}
          onClick={closeVariants}
          type='radio'
          name='language'
          value='es'
          id='language_es'
        />
        <label className={classes.RadioLabel} htmlFor='language_ru'>
          Рус
        </label>
        <input
          defaultChecked={lang === 'ru'}
          className={classes.Radio}
          onChange={toggleLanguage}
          onClick={closeVariants}
          type='radio'
          name='language'
          value='ru'
          id='language_ru'
        />
      </div>
    </div>
  )
})
