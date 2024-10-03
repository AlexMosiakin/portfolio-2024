import { Button } from '../Button/Button';
import './header.scss';
import menuIcon from '../../assets/menuIcon.svg';
import { RefObject } from 'react';

interface IHeader {
    contacts: RefObject<HTMLDivElement>
}

export const Header: React.FC<IHeader> = ({
    contacts,
}) => {

    const onContactMeClick = () => {
        contacts.current?.scrollIntoView({ behavior: 'smooth'})
    }

    return (
        <div className="header-wrapper">
            <div className="logo">AM</div>
            <div className='header-actions'>
                <Button content={'Contact me'} action={onContactMeClick}/>
                <Button content={<img src={menuIcon} alt='menu' />} action={() => {}}/>
            </div>
        </div>
    )
}
