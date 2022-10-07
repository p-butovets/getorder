import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import chevron from '../../resourses/topbar/chevron-left.svg';
import './top.scss';

const Top = (props) => {

    const { showTopBar, text } = props;

    const [topClassName, setTopClassName] = useState("top");

    const navigate = useNavigate();

    //показываем или скрываем топбар
    useEffect(() => {
        showTopBar ?
            setTopClassName("top top_visible")
            :
            setTopClassName("top")
    }, [showTopBar]);

    return (
        <div
            onClick={() => navigate(-1)}
            className={topClassName}>
            <div className="top-arrow-back">
                <img className="top__chevron" src={chevron} alt="back" />
            </div>
            <div className="top-title">{text}</div>
        </div>
    )
}

export default Top;