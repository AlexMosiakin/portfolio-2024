import { Button } from '../Button/Button';
import './header.scss';
import menuIcon from '../../assets/menuIcon.svg';

export const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="logo">AM</div>
            <div className='header-actions'>
                <Button content={'Contact me'} />
                <Button content={<img src={menuIcon} alt='menu' />} />
            </div>
        </div>
    )
}
