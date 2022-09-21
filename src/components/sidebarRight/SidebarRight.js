import './sidebarRight.scss';

const SidebarRight = (props) => {
    return (
        <div className="main-sidebar sidebar-right">
            {props.children}
        </div>
    )
}

export default SidebarRight;