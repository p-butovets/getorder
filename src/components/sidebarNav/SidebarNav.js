import { useState, useEffect } from "react";
import './sidebarNav.scss';

const SidebarNav = (props) => {

    const { menu } = props;

    //для закрепления блока при скролле
    const [positionStyle, setPositionStyle] = useState({ position: "relative" });
    // слушаем скролл
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    //на 300рх от верха - ставим positon fixed
    const handleScroll = () => {
        return window.scrollY >= 300 ?
            setPositionStyle({ position: "fixed", top: "10px" })
            :
            setPositionStyle({ position: "relative" })
    };

    const items = menu.data.sections.map(item => {
        return (
            <Item
                id={item.uniq_id}
                key={item.uniq_id}
                name={item.name}
            />
        )
    })


    return (
        <nav className="nav" style={positionStyle}>
            <div className="nav-title">Меню</div>
            <ul className="nav-list">{items}</ul>
        </nav>
    )
}

const Item = (props) => {

    const { name, id } = props;

    return (
        <a className="nav-item" href={`#${id}`}><li className="nav-item">{name}</li></a>
    )
}

export default SidebarNav;