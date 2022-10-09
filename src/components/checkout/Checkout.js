import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import Modifier from '../modifier/Modifier';
import CartItem from '../cartItem/CartItem';
import Total from '../total/Total';
import Top from '../top/Top';
import Screen from '../screen/Screen';
import Success from '../success/Success';
import Button from '../button/Button';
import ButtonSpinner from '../buttonSpinner/ButtonSpinner';
import rocket from '../../resourses/topbar/rocket-icon.svg';
//псевдозапрос на получение доступных типов доставки ресторана
import deliveryTypes from '../../data/deliveryTypes.json';
//псевдозапрос на получение доступных типов доставки ресторана
import paymentTypes from '../../data/paymentTypes.json';
import './checkout.scss';

const Checkout = (props) => {

    const showTopBar = props.showTopBar;

    const [loading, setLoading] = useState(false);

    //боковой экран слева
    const [openScreen, setOpenScreen] = useState(false);

    //если orderSuccess: в боковой экран слева показываем котика-повара
    const [orderSuccess, setOrderSuccess] = useState(false);

    //фейковая задержка по клику на сабмит
    const clickHandler = () => {
        //1 пошла типа отправка запроса
        setLoading(true);
        //2 через 2 сек запрос ок
        setTimeout(() => {
            setOrderSuccess(true);
            setLoading(false);
        }, 2000)
    }

    //если успешный заказ - выезжает слева экран success
    useEffect(() => {
        if (orderSuccess) {
            setOpenScreen(true)
        } else {
            setOpenScreen(false)
        }
    }, [orderSuccess])

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
            <Screen side={"left"} openScreen={openScreen} setOpenScreen={setOpenScreen}>
                <Success />
                <div className="success-button"
                    onClick={() => setOpenScreen(!openScreen)}
                >В КАБІНЕТ</div>
            </Screen>
            <Top showTopBar={showTopBar} text={"Оформлення замовлення"} />
            <div className="checkout__section">
                <div className="checkout__section-title">Ваше замовлення</div>
                <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
                <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
                <CartItem productId={"cbc70c7e-5fa4-4edc-c01d-08d95c238f00"} />
            </div>
            <div className="checkout__section">
                <form className="form" onSubmit={formik.handleSubmit}>
                    <div className="checkout__section-title">Ваші контакти</div>
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
                    <div className="checkout__section-title">Введіть адрес доставки</div>
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
                    <Modifier attribute={paymentTypes} />
                    <Total />
                    {loading ?
                        <ButtonSpinner />
                        :
                        <button className="cart-confirm" type="submit"
                            onClick={() => clickHandler()}>
                            <div className="cart-confirm-button">
                                <div className="button-text">замовити 4 позиції</div>
                                <div className="rocket-icon">
                                    <img src={rocket} alt="rocket" />
                                </div>
                            </div>
                        </button>}
                </form>
            </div>

        </>

    )
}

export default Checkout;