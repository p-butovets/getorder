import './button.scss';

const Button = (props) => {

    const { className } = props;

    return (
        <div className={`button ${className}`}>
            {props.children}
        </div>
    )
}

export default Button;