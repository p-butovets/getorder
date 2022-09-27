/*Блок корзины, видимы на десктопе, кнопка блока открывает модалку,
в котрую как children передаем форму чекаута (НЕ страницу /checkout) */

import { useState, useEffect } from "react";
import { useFormik } from 'formik';
import Modifier from '../modifier/Modifier';
import CartItem from '../cartItem/CartItem';
import Button from '../button/Button';
import Modal from "../modal/Modal";
import Total from '../total/Total';
import rocket from '../../resourses/topbar/rocket-icon.svg';
import './cart.scss';
//псевдозапрос на получение доступных типов доставки ресторана
import deliveryTypes from '../../data/deliveryTypes.json';
//псевдозапрос на получение доступных типов доставки ресторана
import paymentTypes from '../../data/paymentTypes.json';

const Cart = (props) => {

    const setConfirmerVisibility = props.setConfirmerVisibility;

    const [modalActive, setModalActive] = useState(false);

    //для закрепления блока при скролле
    const [positionStyle, setPositionStyle] = useState({ position: "static" });
    // слушаем скролл
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    //на 300рх от верха - ставим positon fixed
    const handleScroll = () => {
        return window.scrollY >= 300 ?
            setPositionStyle({
                position: "fixed",
                top: "10px",
                width: "20%",
                maxWidth: "209px"
            })
            :
            setPositionStyle({ position: "static" })
    };

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            city: '',
            street: '',
            apt: '',
            entrance: '',
            comment: '',
        },
        onSubmit: values => console.log(JSON.stringify(values, null, 2)),
    })


    return (
        <>
            <div className="cart" style={positionStyle}>
                <div className="nav-title">Ваше замовлення</div>
                <div className="cart-items">
                    <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
                    <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
                    <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
                </div>
                <Button
                    className={'button_wide'}
                    setModalActive={setModalActive}
                    modalActive={modalActive}
                    setConfirmerVisibility={setConfirmerVisibility}
                >
                    замовити 4 позиції
                </Button>
            </div>

            <Modal modalActive={modalActive} setModalActive={setModalActive}>
                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="checkout-pop">
                        <div className="checkout-pop__left">
                            <div className="form__section-header">Ваші контакти</div>
                            <input
                                id='name'
                                name='name'
                                type='text'
                                placeholder='Імʼя'
                                value={formik.values.name}
                                onChange={formik.handleChange} />
                            <input
                                id='phone'
                                name='phone'
                                type='phone'
                                placeholder='Телефон'
                                value={formik.values.phone}
                                onChange={formik.handleChange} />
                            <input
                                id='email'
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={formik.values.email}
                                onChange={formik.handleChange} />
                            <Modifier attribute={deliveryTypes} />
                            <Modifier attribute={paymentTypes} />
                        </div>
                        <div className="checkout-pop__right">
                            <div className="form__section-header">Введіть адресу доставки</div>
                            <input
                                id='city'
                                name='city'
                                type='text'
                                placeholder='Місто'
                                value={formik.values.city}
                                onChange={formik.handleChange} />
                            <input
                                id='street'
                                name='street'
                                type='text'
                                placeholder='Вулиця'
                                value={formik.values.street}
                                onChange={formik.handleChange} />
                            <input
                                id='apt'
                                name='apt'
                                type='text'
                                placeholder='Будинок'
                                value={formik.values.apt}
                                onChange={formik.handleChange} />
                            <input
                                id='entrance'
                                name='entrance'
                                type='text'
                                placeholder='Підʼїзд'
                                value={formik.values.entrance}
                                onChange={formik.handleChange} />
                            <div className="form__section-header">Коментар</div>
                            <input
                                id='comment'
                                name='comment'
                                type='text'
                                placeholder='Коментар до замовлення'
                                value={formik.values.comment}
                                onChange={formik.handleChange} />
                            <Total />
                            <button className="cart-confirm" type="submit">
                                <div className="cart-confirm-button">
                                    <div className="button-text">замовити 4 позиції</div>
                                    <div className="rocket-icon">
                                        <img src={rocket} alt="rocket" />
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </form>
            </Modal>
        </>
    )
}

export default Cart;