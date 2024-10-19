import React from 'react'
import './menu.scss'

interface IMenu {
    isMenuOpen: boolean
    menuClose: () => void
}

export const Menu: React.FC<IMenu> = ({
    isMenuOpen,
    menuClose
}) => {

    const menuItems = [
        {
            title: 'Home',
            elementClassName: '.main-section'
        },
        {
            title: 'About',
            elementClassName: '.about-section'
        },
        {
            title: 'Experience',
            elementClassName: '.experience-section'
        },
        {
            title: 'Projects',
            elementClassName: '.projects-section'
        },
        {
            title: 'Contacts',
            elementClassName: '.contacts-section'
        }
    ]

    const onLinkClick = (elementClassName: string) => {
        const element = document.querySelector(elementClassName) as HTMLElement
        element?.scrollIntoView({ behavior: 'smooth' })
        menuClose()
    }

    return (
        <ul
            className='menuWrapper'
            style={{
                opacity: isMenuOpen ? 1 : 0,
                pointerEvents: isMenuOpen ? 'all' : 'none',
            }}
        >
            {menuItems.map((item) => (
                <li
                    key={item.title}
                    onClick={() => onLinkClick(item.elementClassName)}
                >
                    {item.title}
                </li>
            ))}
        </ul>
    )
}
