import {
  InputHTMLAttributes,
  FC,
  memo,
  useCallback,
  ChangeEvent,
  useMemo,
} from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import classes from './Input.module.scss'

type CustomInputAttributes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value' | 'placeholder'
>

interface InputProps extends CustomInputAttributes {
  className?: string
  onChange?: (newValue: string) => void
  value?: string
  placeholder?: string | null
}

export const Input: FC<InputProps> = memo((props) => {
  const { className, onChange, value, placeholder, ...restProps } = props

  const inputPlaceholder = useMemo(() => placeholder || '', [placeholder])
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => onChange?.(event.target.value),
    [onChange]
  )
  return (
    <input
      className={classNames(classes.Input, {}, [className])}
      type='text'
      value={value}
      onChange={handleChange}
      placeholder={inputPlaceholder}
      {...restProps}
    />
  )
})
