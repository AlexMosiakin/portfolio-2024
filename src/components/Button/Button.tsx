import React from 'react'
import loaderIcon from '../../assets/loader.svg'
import './button.scss'

interface IButton {
  content: string | JSX.Element;
  action?: (prop?: any) => void;
  theme?: 'light' | 'dark';
  style?: React.CSSProperties;
  type?: 'button' | 'link'
  href?: string
  disabled?: boolean
  loading?: boolean
}

export const Button: React.FC<IButton> = ({
  content,
  action,
  theme = 'dark',
  style,
  type,
  href,
  disabled,
  loading,
}) => {
  switch (type) {
    case 'link':
      return <a className={`button ${theme}`} style={style} href={href} target='_blank'>{content}</a>
    default:
      return <button
        className={`button ${theme}`}
        style={style} onClick={action}
        disabled={disabled}
      >
        {
          loading ?
            <img className='loader' src={loaderIcon} alt="loaderIcon" /> :
            content
        }
      </button>
  }
}
