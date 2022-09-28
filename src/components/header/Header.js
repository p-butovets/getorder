import LangToggler from '../langToggler/LangToggler';
import Logo from '../logo/Logo';
import pin from '../../resourses/header/pin.svg'
import shevronDown from '../../resourses/header/shevron_down.svg'
import menuButton from '../../resourses/header/menu-button.svg';
import './header.scss';


const Header = (props) => {

    const { slided, setSlided } = props;

    return (
        <>
            <header className='header'>
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

            <header className='header_mob'>
                <img
                    onClick={() => setSlided(!slided)}
                    className='menu-button' src={menuButton} alt="menu button" />
                <Logo />
                <LangToggler />
            </header>

        </>

    )
}

export default Header;