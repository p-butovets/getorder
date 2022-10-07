import { useState, useEffect } from "react";
import fb from '../../resourses/social/facebook.svg';
import vk from '../../resourses/social/vk.svg';
import insta from '../../resourses/social/instagram.svg';
import youtube from '../../resourses/social/youtube.svg';
import './social.scss';

const Social = (props) => {

    const [pathname, setPathname] = useState(null);
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        /* запускаем таймер с интревалом, по которому устанавливаем текущий pathname*/
        const timer = setInterval(() =>
            setPathname(window.location.pathname), 100)
        //отключаем таймер если unmount
        return () => clearInterval(timer)
    }, [])

    //не показываем slider на странице checkout, terms, privacity, about
    useEffect(() => {
        if (pathname === '/checkout'
            || pathname === '/terms'
            || pathname === '/privacity'
            || pathname === '/about'
        ) {
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }, [pathname])

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