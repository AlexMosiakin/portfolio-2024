import { Button } from '../Button/Button';
import './header.scss';
import menuIcon from '../../assets/menuIcon.svg';
import crossIcon from '../../assets/crossIcon.svg';
import { RefObject } from 'react';

interface IHeader {
    contacts: RefObject<HTMLDivElement>
    isMenuOpen: boolean
    menuToggle: () => void
}

export const Header: React.FC<IHeader> = ({
    contacts,
    isMenuOpen,
    menuToggle,
}) => {

    const onContactMeClick = () => {
        contacts.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="header-wrapper">
            <div className='header-actions'>
                <Button theme={isMenuOpen ? 'light' : 'dark'} content={'Contact me'} action={onContactMeClick} />
            </div>
            <Button
                theme={isMenuOpen ? 'light' : 'dark'}
                content={<img className='menu-icon' src={isMenuOpen ? crossIcon : menuIcon} alt='menu' />}
                action={menuToggle}
            />
        </div>
    )
}
