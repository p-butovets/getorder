import './button.scss';

const Button = (props) => {

    const { className, setModalActive } = props;

    return (
        <div
            onClick={() => setModalActive(false)}
            className={`button ${className}`}>
            {props.children}
        </div>
    )
}

export default Button;