import { useState, useEffect, useRef } from "react";
import './sidebarNav.scss';

const SidebarNav = (props) => {

    const { menu } = props;

    //для установки активного элемента меню собираем рефы
    const [itemRefs, setItemRefs] = useState([])
    const addRef = (newRef) => {
        setItemRefs(refs => ([...refs, newRef]))
    }

    /*Функция снимает className active со всех кнопок */
    const toggleActiveClass = (ref) => {
        for (let i in itemRefs) {
            const name = itemRefs[i] === ref ? 'nav-link nav-link_active' : 'nav-link'
            itemRefs[i].current.className = name
        }
    }

    //для закрепления блока при скролле
    const [positionStyle, setPositionStyle] = useState({ position: "static" });
    // слушаем скролл
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    //на 300рх от верха - ставим positon fixed
    const handleScroll = () => {
        return window.scrollY >= 300 ?
            setPositionStyle({ position: "fixed", top: "10px" })
            :
            setPositionStyle({ position: "static" })
    };

    const items = menu.data.sections.map(item => {
        return (
            <Item
                id={item.uniq_id}
                key={item.uniq_id}
                name={item.name}
                addRef={addRef}
                toggleActiveClass={toggleActiveClass}
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

    const { name, id, addRef, toggleActiveClass } = props;

    const itemRef = useRef(null);

    useEffect(() => {
        addRef(itemRef)
    }, [])

    return (
        <a
            onClick={() => toggleActiveClass(itemRef)}
            className="nav-link"
            href={`#${id}`}
            ref={itemRef}>
            <li>{name}</li>
        </a>
    )
}

export default SidebarNav;