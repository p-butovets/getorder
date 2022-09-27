import './button.scss';

const Button = (props) => {

    const { className, modalActive, setModalActive } = props;

    return (
        <div
            onClick={() => setModalActive(!modalActive)}
            className={`button ${className}`}>
            {props.children}
        </div>
    )
}

export default Button;