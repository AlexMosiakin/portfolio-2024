import { Button } from '../Button/Button';
import './header.scss';
import menuIcon from '../../assets/menuIcon.svg';
import { RefObject } from 'react';

interface IHeader {
    contacts: RefObject<HTMLDivElement>
    menuOpen: () => void
}

export const Header: React.FC<IHeader> = ({
    contacts,
    menuOpen,
}) => {

    const onContactMeClick = () => {
        contacts.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="header-wrapper">
            <div className='header-actions'>
                <Button content={'Contact me'} action={onContactMeClick} />
            </div>
            <Button
                content={<img className='menu-icon' src={menuIcon} alt='menu' />}
                action={menuOpen}
            />
        </div>
    )
}
