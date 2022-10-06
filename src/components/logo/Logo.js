import { useNavigate } from "react-router-dom";
import logo from '../../resourses/logo/logo.png';
import './logo.scss';

const Logo = () => {

    const navigate = useNavigate();

    return (
        <div className="logo"
            onClick={() => navigate('/')}>
            <img className="logo_image" src={logo} alt="logo" />
        </div>
    )
}

export default Logo;