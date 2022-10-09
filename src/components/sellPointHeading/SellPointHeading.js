import { useState, useEffect } from "react";
import clock from '../../resourses/icons/clock.svg';
import like from '../../resourses/icons/like.svg';
import phone from '../../resourses/icons/phone.svg';
import './sellPointHeading.scss';

// как буд-то запрос на список ресторанов
import restaurants from '../../data/restaurants.json';


const SellPointHeading = (props) => {

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
            </div>
            <div className="restaurant-heading__right">
                <img src={phone} alt="phone" />
            </div>
        </div>
    )
}

export default SellPointHeading;