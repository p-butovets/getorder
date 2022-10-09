import './button.scss';

const Button = (props) => {

    const {
        className,
        modalActive,
        setModalActive,
        setConfirmerVisibility,
    } = props;

    return (
        <div
            onClick={() => {
                setModalActive(!modalActive)
                setConfirmerVisibility(true)
            }}
            className={`button ${className}`}>
            {props.children}
        </div>
    )
}

export default Button;