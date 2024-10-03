import React from 'react'
import './button.scss'

interface IButton {
    content: string | JSX.Element;
    action: () => void;
    style?: React.CSSProperties;
}

export const Button: React.FC<IButton> = ({
    content,
    action,
    style,
}) => {
  return (
    <button className='button' style={style} onClick={action}>{content}</button>
  )
}
