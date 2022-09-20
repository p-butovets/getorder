import './copyrights.scss';
import logo from '../../resourses/copyright/logo-light.svg';

const Copyrights = () => {

    return (
        <div >
            <a className="copyrights" href="https://getorder.biz/">
                <div className="copyrights-text">Створено</div>
                <img className="copyrights-icon" src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default Copyrights;