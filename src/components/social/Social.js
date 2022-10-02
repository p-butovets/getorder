import { useState, useEffect } from "react";
import fb from '../../resourses/social/facebook.svg';
import vk from '../../resourses/social/vk.svg';
import insta from '../../resourses/social/instagram.svg';
import youtube from '../../resourses/social/youtube.svg';
import './social.scss';

const Social = (props) => {

    const [visibility, setVisibility] = useState(true);

    //не показываем на странице checkout
    useEffect(() => {
        if (window.location.pathname === '/checkout')
            setVisibility(false)
    }, [])

    const clazz = props.class;

    return (
        <div className={clazz} style={visibility ? null : { display: 'none' }}>
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