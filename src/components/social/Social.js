import fb from '../../resourses/social/facebook.svg';
import vk from '../../resourses/social/vk.svg';
import insta from '../../resourses/social/instagram.svg';
import youtube from '../../resourses/social/youtube.svg';
import './social.scss';

const Social = (props) => {

    const clazz = props.class;

    return (
        <div className={clazz}>
            <div className="social-title">Приеднуйтесь</div>
            <div className="social-icons">
                <a href="#fb"><img src={fb} alt="fb" /></a>
                <a href="#fb"><img src={vk} alt="vk" /></a>
                <a href="#fb"><img src={insta} alt="insta" /></a>
                <a href="#fb"><img src={youtube} alt="youtube" /></a >
            </div>
        </div>
    )
}

export default Social;