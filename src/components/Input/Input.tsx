import React from 'react'
import './input.scss'

interface IInput {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  placeholder?: string;
}

export const Input: React.FC<IInput> = ({
  value,
  onChange,
  style,
  placeholder,
}) => {
  return (
    <input
      className='input'
      onChange={onChange}
      style={style}
      placeholder={placeholder}
      type='text'
    >
      {value}
    </input>
  )
}
