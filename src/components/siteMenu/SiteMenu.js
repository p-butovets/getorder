import { useNavigate } from "react-router-dom";
import home from '../../resourses/icons/home.svg';
import feedback from '../../resourses/icons/feedback.svg';
import close from '../../resourses/icons/circle-close.svg';
import './siteMenu.scss';

const SiteMenu = (props) => {

    const setSlided = props.setSlided;
    const navigate = useNavigate();

    return (
        <div className="site-nav">
            <div className="site-nav__header">
                <div className="site-nav__title">Меню</div>
                <div
                    onClick={() => setSlided(false)}
                    className="site-nav__close">
                    <img src={close} alt="close" />
                </div>
            </div>
            <div className="site-nav__content">
                <div className="site-nav__items-wrapper">
                    <div className="site-nav__item"
                        onClick={() => {
                            navigate('/')
                            setSlided(false)
                        }}>
                        <div className="site-nav__item-icon">
                            <img src={home} alt="home" />
                        </div>
                        <div className="site-nav__item-title">Головна</div>
                    </div>
                    <div className="site-nav__item">
                        <div className="site-nav__item-icon">
                            <img src={feedback} alt="feedback" />
                        </div>
                        <div className="site-nav__item-title">Надіслати відгук</div>
                    </div>
                </div>
                <div className="site-nav__footer">
                    <div className="site-nav__item"
                        onClick={() => {
                            navigate('/about')
                            setSlided(false)
                        }}>
                        <div className="site-nav__item-title">Інформація про компанію</div>
                    </div>
                    <div className="site-nav__item"
                        onClick={() => {
                            navigate('/terms')
                            setSlided(false)
                        }}>
                        <div className="site-nav__item-title">Умови використання</div>
                    </div>
                    <div className="site-nav__item"
                        onClick={() => {
                            navigate('/privacity')
                            setSlided(false)
                        }}>
                        <div className="site-nav__item-title">Політика конфіденційності</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SiteMenu;