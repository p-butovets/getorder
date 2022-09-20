import logo from '../../resourses/logo/logo.png';
import './logo.scss';

const Logo = () => {
    return (
        <div className="logo">
            <img className="logo_image" src={logo} alt="logo" />
        </div>
    )
}

export default Logo;