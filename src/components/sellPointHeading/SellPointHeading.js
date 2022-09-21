import { useState, useEffect } from "react";
import './sellPointHeading.scss';

// как буд-то запрос на список ресторанов
import restaurants from '../../data/restaurants.json';


const SellPointHeading = (props) => {

    const orderRestaurant = props.orderRestaurant;
    const [name, setName] = useState(null)

    useEffect(() => {
        for (let rest in restaurants.data) {
            if (restaurants.data[rest].id === orderRestaurant) {
                setName(restaurants.data[rest].title)
            }
        }
    }, [orderRestaurant])

    return (
        <div className="restaurant-heading">
            <div className="restaurant-heading__name">
                {name}
            </div>
        </div>
    )
}

export default SellPointHeading;