import { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import RestaurantList from '../restaurantList/RestaurantList';
import Heading from "../heading/Heading";
import clock from '../../resourses/icons/clock.svg';
import like from '../../resourses/icons/like.svg';
import phone from '../../resourses/icons/phone.svg';
import './sellPointHeading.scss';

// как буд-то запрос на список ресторанов
import restaurants from '../../data/restaurants.json';


const SellPointHeading = (props) => {

    //состояние модалки со списком ресторанов
    const [popupActive, setPopupActive] = useState(false);

    //состояние модалки с телефоном
    const [modalActive, setModalActive] = useState(false);

    const orderRestaurant = props.orderRestaurant;
    const [name, setName] = useState(null)
    const [description, setDescription] = useState(null)

    useEffect(() => {
        for (let rest in restaurants.data) {
            if (restaurants.data[rest].id === orderRestaurant) {
                setName(restaurants.data[rest].title)
                setDescription(restaurants.data[rest].addresslink)
            }
        }
    }, [orderRestaurant])

    return (
        <>
            <div className="restaurant-heading">
                <div className="restaurant-heading__left">
                    <div className="restaurant-heading__name">
                        {name}
                    </div>
                    <div className="restaurant-heading__description">
                        {description}
                    </div>
                    <div className="restaurant-heading__info">
                        <span className="info-item">
                            <img src={clock} alt="open time" />
                            11:00 - 20:45
                        </span>
                        <span className="info-item">
                            <img src={like} alt="rating" />
                            4,5
                        </span>
                    </div>
                    <div
                        onClick={() => setPopupActive(!popupActive)}
                        className="restaurant-heading__changer">
                        змінити заклад
                    </div>
                </div>
                <div className="restaurant-heading__right"
                    onClick={() => setModalActive(!modalActive)}>
                    <img src={phone} alt="phone" />
                </div>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} smaller={true}>
                <div className="contacts">
                    <a className="contacts-item" href="tel:+380995555555">+38 099 555 55 55</a>
                    <a className="contacts-item" href="tel:+380995555555">+38 099 555 55 55</a>
                    <div className="contacts-text">Приймаємо дзвінки з 10:00 до 21:00</div>
                </div>
            </Modal>

            <Modal modalActive={popupActive} setModalActive={setPopupActive}>
                <div className="restaurant-heading__changer-wrap">
                    <Heading description={"Виберіть ресторан:"} />
                    <RestaurantList setOrderRestaurant={() => console.log("Не устанавливаем")} />
                </div>
            </Modal>
        </>
    )
}

export default SellPointHeading;