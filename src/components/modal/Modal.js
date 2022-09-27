import ProductPop from '../productPop/ProductPop';
import close from '../../resourses/icons/close.svg';
import './modal.scss';

const Modal = (props) => {

    const { productId, modalActive, setModalActive, setConfirmerVisibility, buttonText, children } = props;

    /* рендерим компонент только если modalActive*/
    return (
        <>
            {modalActive ?
                <View
                    children={children}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    productId={productId}
                    setConfirmerVisibility={setConfirmerVisibility}
                    buttonText={buttonText}
                /> : null}
        </>
    )
}

const View = (props) => {

    const { productId, modalActive, setModalActive, children, setConfirmerVisibility, buttonText } = props;

    /*если productId = true, значит нужно рендерить ProductPop,
    иначе рендерим то, что пришло в children*/

    return (
        <>
            <div className={`modal__overlay ${modalActive ? "modal__overlay_active" : ""}`}></div>
            <div className={`modal ${modalActive ? "modal_active" : ""}`}>
                {productId ?
                    <ProductPop
                        productId={productId}
                        setConfirmerVisibility={setConfirmerVisibility}
                        modalActive={modalActive}
                        setModalActive={setModalActive}
                        buttonText={buttonText}
                    />
                    : children}
                <img
                    className="modal__close"
                    src={close}
                    alt="Close"
                    onClick={() => setModalActive(false)}
                />
            </div>
        </>
    )
}

export default Modal;