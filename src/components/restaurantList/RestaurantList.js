import { useNavigate } from "react-router-dom";
import './restaurantList.scss';

//запрос на список ресторанов
import restaurants from '../../data/restaurants.json';

const RestaurantList = (props) => {

    const setOrderRestaurant = props.setOrderRestaurant;

    const pointsList = restaurants.data.map(restaurant => {
        return (
            <Restaurant
                city={restaurant.city_name}
                address={restaurant.addresslink}
                title={restaurant.title}
                img={restaurant.smallimage.webp}
                url={restaurant.url}
                id={restaurant.id}
                key={restaurant.id}
                setOrderRestaurant={setOrderRestaurant}
            />
        )
    })

    return (
        <div className="restaurant-list">
            {pointsList}
        </div>
    )
}

const Restaurant = (props) => {

    let navigate = useNavigate();

    const { city, address, title, img, url, id, setOrderRestaurant } = props;

    return (
        <>
            <div className="restaurant-item"
                onClick={() => {
                    navigate(url);
                    setOrderRestaurant(id);
                }}>
                <img src={img} className="restaurant-img" alt={title} />
                <div className="restaurant-info">
                    <div className="restaurant-title">{title}</div>
                    <div className="restaurant-address">{`${address}, ${city}`}</div>
                </div>
            </div>
        </>
    )
}

export default RestaurantList;