import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import SidebarLeft from '../sidebarLeft/SidebarLeft';
import SidebarRight from '../sidebarRight/SidebarRight';
import MainContent from '../mainContent/MainContent';
import Heading from "../heading/Heading";
import OrderType from '../orderType/OrderType';
import RestaurantList from '../restaurantList/RestaurantList';
import Social from '../social/Social';
import SellPointHeading from '../sellPointHeading/SellPointHeading';
import SidebarNav from "../sidebarNav/SidebarNav";
import Menu from "../menu/Menu";
import Cart from "../cart/Cart";
import Confirmer from "../confirmer/Confirmer";
import Checkout from "../checkout/Checkout";
import Article from "../article/Article";
import './main.scss';

//как-будто запросы на бекенд
import restaurants from '../../data/restaurants.json';
import menu from '../../data/menu.json';
import articles from '../../data/articles.json';

const Main = (props) => {

    const { showTopBar, pinBars } = props;

    //доставка, самовывоз или "в закладі"
    // eslint-disable-next-line
    const [orderType, setOrderType] = useState();

    // Храним выбраный клиентом ресторан заказа, айди устанавливаем в компоненте "restaurants"
    // или определяем по pathName при прямом заходе
    const [orderRestaurant, setOrderRestaurant] = useState(null);
    const [orderRestaurantUrl, setOrderRestaurantUrl] = useState(null);

    //Храним меню выбраного ресторана
    const [restaurantMenu, setRestaurantMenu] = useState(null);

    //Рефы категорий. при отрисовке категрий сюда складывается и хранится массив рефов
    // Для синхронизацции свайпера и скролла
    const [categoryRefs, setCategoryRefs] = useState([])

    // Функция складывает рефы категорий
    const addRefToRefs = (newRef) => {
        setCategoryRefs(refs => ([...refs, newRef]))
    }

    //4. тут хранится реф катгории, которая на видимом экране 
    //   и нужно горионтальный слайдер установить с этой категорией
    // Для синхронизацции свайпера и скролла
    const [activeCategory, setActiveCategory] = useState();


    //Храним видимость кнопки "замовити"
    const [confirmerVisibility, setConfirmerVisibility] = useState(false);

    //Когда выбран ресторан, то устанавливаем его урл и меню єтого ресторана
    /* Я не разобрался, как получить меню, но тут должен быть
    запрос на меню ресторана по его айди, и потом установка объекта меню в стейт
    Сейчас просто одинаковое меню устанавливается*/
    useEffect(() => {
        for (let rest in restaurants.data) {
            if (restaurants.data[rest].id === orderRestaurant) {
                setOrderRestaurantUrl(restaurants.data[rest].url)
            }
        }
        setRestaurantMenu(menu)
    }, [orderRestaurant])

    //Если заход не с главной, а по прямому урл, то устанвливаем orderRestaurant по айди этого урла
    useEffect(() => {
        for (let rest in restaurants.data) {
            if (restaurants.data[rest].url === window.location.pathname) {
                setOrderRestaurant(restaurants.data[rest].id)
            }
        }
    }, [])

    return (
        <section className='main'>
            <Routes>
                <Route path='/' element={
                    <>
                        <SidebarLeft />
                        <MainContent>
                            <Heading description={"Що вас цікавить?"} />
                            <OrderType setOrderType={setOrderType} />
                        </MainContent>
                        <SidebarRight>
                            <Social class={'social'} />
                        </SidebarRight>
                    </>
                } />

                <Route path='/restaurants' element={
                    <>
                        <SidebarLeft />
                        <MainContent>
                            <Heading description={"Виберіть ресторан:"} />
                            <RestaurantList setOrderRestaurant={setOrderRestaurant} />
                        </MainContent>
                        <SidebarRight>
                            <Social class={'social'} />
                        </SidebarRight>
                    </>
                } />

                <Route path={orderRestaurantUrl} element={
                    <>
                        <SidebarLeft>
                            <SidebarNav
                                pinBars={pinBars}
                                menu={menu} />
                        </SidebarLeft>
                        <MainContent>
                            <SellPointHeading orderRestaurant={orderRestaurant} />
                            <Menu
                                menu={restaurantMenu}
                                setActiveCategory={setActiveCategory}
                                setConfirmerVisibility={setConfirmerVisibility}
                                activeCategory={activeCategory}
                                orderRestaurant={orderRestaurant}
                                setOrderRestaurant={setOrderRestaurant}
                                categoryRefs={categoryRefs}
                                setCategoryRefs={setCategoryRefs}
                                addRefToRefs={addRefToRefs}
                                showTopBar={showTopBar}
                            />
                            <Confirmer
                                confirmerVisibility={confirmerVisibility}
                            />
                        </MainContent>
                        <SidebarRight>
                            <Cart
                                pinBars={pinBars}
                                setConfirmerVisibility={setConfirmerVisibility} />
                        </SidebarRight>
                    </>
                } />
                <Route path='/checkout' element={<Checkout showTopBar={showTopBar} />} />
                <Route path='/terms' element={<Article articleText={articles.terms} showTopBar={showTopBar} text={"Умови використання"} />} />
                <Route path='/about' element={<Article articleText={articles.about} showTopBar={showTopBar} text={"Інформація про компанію"} />} />
                <Route path='/privacity' element={<Article articleText={articles.privacity} showTopBar={showTopBar} text={"Політика конфіденційності"} />} />
            </Routes>
        </section>
    )
}

export default Main;