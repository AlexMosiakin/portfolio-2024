import React from 'react'
import './menu.scss'
import { Button } from '../../components/Button/Button'
import crossIcon from '../../assets/crossIcon.svg';

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
        <div
            className='menuWrapper'
            style={{
                opacity: isMenuOpen ? 1 : 0,
                pointerEvents: isMenuOpen ? 'all' : 'none',
            }}
        >
            <Button
                content={<img className='close-icon' src={crossIcon} alt='menu' />}
                action={menuClose}
                style={{
                    position: 'fixed',
                    top: 'max(3.33lvw, 30px)',
                    right: 'max(3.33lvw, 30px)',
                }}
            />
            <ul className='menuWrapper-items'>
                {menuItems.map((item) => (
                    <li
                        key={item.title}
                        onClick={() => onLinkClick(item.elementClassName)}
                    >
                        {item.title}
                    </li>
                ))}
            </ul>
        </div>

    )
}
