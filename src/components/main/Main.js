import { BrowserRouter, Routes, Route } from "react-router-dom";

import SidebarLeft from '../sidebarLeft/SidebarLeft';
import SidebarRight from '../sidebarRight/SidebarRight';
import MainContent from '../mainContent/MainContent';
import Heading from "../heading/Heading";
import OrderType from '../orderType/OrderType';
import RestaurantList from '../restaurantList/RestaurantList';
import './main.scss';

const Main = (props) => {

    const { setOrderType, setOrderRestaurant } = props;

    return (
        <section className='main'>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <>
                            <SidebarLeft />
                            <MainContent>
                                <Heading description={"Що вас цікавить?"} />
                                <OrderType setOrderType={setOrderType} />
                            </MainContent>
                            <SidebarRight />
                        </>
                    } />

                    <Route path='/restaurants' element={
                        <>
                            <SidebarLeft />
                            <MainContent>
                                <Heading description={"Виберіть ресторан:"} />
                                <RestaurantList setOrderRestaurant={setOrderRestaurant} />
                            </MainContent>
                            <SidebarRight />
                        </>
                    } />
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default Main;