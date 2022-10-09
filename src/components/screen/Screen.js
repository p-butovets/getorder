import './screen.scss';

const Screen = (props) => {

    const { children, side, openScreen, setOpenScreen } = props;

    return (
        <div
            className={`screen screen_${side} ${openScreen ? `screen_${side}_open` : `screen_${side}_closed`}`}
        >
            {children}
        </div>
    )
}

export default Screen;