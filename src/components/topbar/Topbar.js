import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Navigation from '../navigation/Navigation';
import chevron from '../../resourses/topbar/chevron-left.svg';
import './topbar.scss';

// как буд-то запрос на список ресторанов
import restaurants from '../../data/restaurants.json';


const Topbar = (props) => {

    const { menu, orderRestaurant, setOrderRestaurant, categoryRefs, setCategoryRefs, activeCategory, showTopBar } = props;

    let navigate = useNavigate();
    const [restaurantName, setRestaurantName] = useState(null)
    const [toggler, setToggler] = useState("topbar");

    //когда выбран ресторан - берем и устанавливаем название ресторана
    useEffect(() => {
        for (let rest in restaurants.data) {
            if (restaurants.data[rest].id === orderRestaurant) {
                setRestaurantName(restaurants.data[rest].title)
            }
        }
    }, [orderRestaurant])

    useEffect(() => {
        showTopBar ?
            setToggler("topbar topbar_visible")
            :
            setToggler("topbar")
    }, [showTopBar]);


    return (
        <div className={toggler}>
            <div className="topbar_arrow-back"
                onClick={() => {
                    navigate(`/restaurants`);
                    setOrderRestaurant(null);
                    setCategoryRefs([]);
                }}>
                <img className="topbar__chevron" src={chevron} alt="back" />
            </div>
            <div className="topbar__wrapper">
                <div className="topbar__restaurant-name">
                    {restaurantName}
                </div>
                <div className="topbar__navigation-slider">
                    <Navigation
                        menu={menu}
                        categoryRefs={categoryRefs}
                        //6. передайем в свайпер, какая категория должна установиться по скроллу
                        currentCategory={activeCategory} />
                </div>
            </div>
        </div>
    )

}

export default Topbar;