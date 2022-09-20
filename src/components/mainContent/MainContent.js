import './mainContent.scss';

const MainContent = (props) => {

    const { children } = props;

    return (
        <div className="main-content">
            <div>
                {children}
            </div>
        </div>
    )
}

export default MainContent;
