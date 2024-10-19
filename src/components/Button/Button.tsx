import React from 'react'
import './button.scss'

interface IButton {
    content: string | JSX.Element;
    action: (prop?: any) => void;
    theme?: 'light' | 'dark';
    style?: React.CSSProperties;
}

export const Button: React.FC<IButton> = ({
    content,
    action,
    theme = 'dark',
    style,
}) => {
  return (
    <button className={`button ${theme}`} style={style} onClick={action}>{content}</button>
  )
}
