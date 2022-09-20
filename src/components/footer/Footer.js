import Copyrights from '../copyrights/Copyrights';
import Social from '../social/Social';
import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <Social class={'social_mob'} />
            <Copyrights />
        </div>
    )
}

export default Footer;