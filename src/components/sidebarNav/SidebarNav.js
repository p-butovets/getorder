import './sidebarNav.scss';

const SidebarNav = (props) => {

    const { menu } = props;


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
        <nav className="nav">
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