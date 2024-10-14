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
        contacts.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="header-wrapper">
            <Button content={<img src={menuIcon} alt='menu' />} action={() => { }} />
            <div className='header-actions'>
                <Button content={'Contact me'} action={onContactMeClick} />
            </div>
        </div>
    )
}
