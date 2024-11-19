import React from 'react'
import './link.scss'

interface ILink {
    href: string;
    content: string;
    target?: string;
}

export const Link: React.FC<ILink> = ({
    href,
    content,
    target,
}) => {
  return (
    <a className='link' href={href} target={target}>{content}</a>
  )
}
