import { useEffect } from 'react';
import ProductPop from '../productPop/ProductPop';
import close from '../../resourses/icons/close.svg';
import './modal.scss';

const Modal = (props) => {

    const { productId, modalActive, setModalActive, setConfirmerVisibility, buttonText, smaller, children } = props;

    /*1. Чтобы при открытой модалке не скроллися под не контент
    берем container */
    const container = document.querySelector('.container')

    /*2. меняем значение overflow-y у container в зависимости от 
    открытой или закрытой модалки */
    useEffect(() => {
        if (modalActive) {
            container.style.overflowY = 'hidden'
        } else {
            container.style.overflowY = 'auto'
        }
    }, [modalActive])

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
                    smaller={smaller}
                /> : null}
        </>
    )
}

const View = (props) => {

    const { productId, modalActive, setModalActive, children, setConfirmerVisibility, buttonText, smaller } = props;

    /*если productId = true, значит нужно рендерить ProductPop,
    иначе рендерим то, что пришло в children*/

    return (
        <>
            <div
                onClick={() => setModalActive(false)}
                className={`modal__overlay ${modalActive ? "modal__overlay_active" : ""}`}></div>
            <div className={`modal ${smaller ? "smaller" : ""} ${modalActive ? "modal_active" : ""}`}>
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