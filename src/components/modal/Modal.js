import close from '../../resourses/icons/close.svg';
import './modal.scss';

const Modal = (props) => {

    const { active, setActive, children } = props;

    return (
        <>
            <div className={`modal__overlay ${active ? "modal__overlay_active" : ""}`}></div>
            <div className={`modal ${active ? "modal_active" : ""}`}>
                {children}
                <img
                    className="modal__close"
                    src={close}
                    alt="Close"
                    onClick={() => setActive(false)}
                />
            </div>
        </>
    )
}

export default Modal;