import React from 'react'
import './textarea.scss'

interface ITextarea {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
}

export const Textarea: React.FC<ITextarea> = ({
  value,
  onChange,
  style,
  placeholder,
}) => {
  return (
    <textarea
      className='textarea'
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      rows={4}
      value={value}
    />
  )
}
