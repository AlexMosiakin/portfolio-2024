import React from 'react'
import './button.scss'

interface IButton {
    content: string | JSX.Element;
}

export const Button: React.FC<IButton> = ({
    content,
}) => {
  return (
    <button className='button'>{content}</button>
  )
}
