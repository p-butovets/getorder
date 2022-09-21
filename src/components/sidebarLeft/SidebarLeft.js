
import './sidebarLeft.scss';

const SidebarLeft = (props) => {
    return (
        <div className="main-sidebar sidebar-left">
            {props.children}
        </div>
    )
}

export default SidebarLeft;