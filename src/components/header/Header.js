import { useEffect, useState } from 'react';
import LangToggler from '../langToggler/LangToggler';
import Logo from '../logo/Logo';
import pin from '../../resourses/header/pin.svg'
import shevronDown from '../../resourses/header/shevron_down.svg'
import menuButton from '../../resourses/header/menu-button.svg';
import './header.scss';


const Header = (props) => {

    const { slided, setSlided } = props;
    const [visibility, setVisibility] = useState(true);

    //не показываем header на странице checkout
    useEffect(() => {
        if (window.location.pathname === '/checkout')
            setVisibility(false)
    }, [])

    return (
        <>
            <header className='header' style={visibility ? null : { display: 'none' }}>
                <img
                    onClick={() => setSlided(!slided)}
                    className='menu-button' src={menuButton} alt="menu button" />

                <div className="header-content">
                    <Logo />
                    <address className='header_address'>
                        <img src={pin} alt='pin' />
                        проспект Дмитра Яворницького, 115А, 49000
                        <img src={shevronDown} alt='shevron_down' />
                    </address>
                    <LangToggler />
                </div>
            </header>

            <header className='header_mob' style={visibility ? null : { display: 'none' }}>
                <img
                    onClick={() => setSlided(!slided)}
                    className='menu-button' src={menuButton} alt="menu button" />
                <Logo />
                <div className="mob_toggler">
                    <LangToggler />
                </div>
            </header>

        </>

    )
}

export default Header;