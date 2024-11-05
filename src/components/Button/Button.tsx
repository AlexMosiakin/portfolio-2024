import React from 'react'
import './button.scss'

interface IButton {
  content: string | JSX.Element;
  action?: (prop?: any) => void;
  theme?: 'light' | 'dark';
  style?: React.CSSProperties;
  type?: 'button' | 'link'
  href?: string
  disabled?: boolean
}

export const Button: React.FC<IButton> = ({
  content,
  action,
  theme = 'dark',
  style,
  type,
  href,
  disabled,
}) => {
  switch (type) {
    case 'link':
      return <a className={`button ${theme}`} style={style} href={href} target='_blank'>{content}</a>
    default:
      return <button className={`button ${theme}`} style={style} onClick={action} disabled={disabled}>{content}</button>
  }
}
