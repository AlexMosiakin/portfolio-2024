import React from 'react'
import './button.scss'

interface IButton {
    content: string | JSX.Element;
    style?: React.CSSProperties;
}

export const Button: React.FC<IButton> = ({
    content,
    style,
}) => {
  return (
    <button className='button' style={style}>{content}</button>
  )
}
