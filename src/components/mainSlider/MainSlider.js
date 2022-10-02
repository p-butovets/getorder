import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import slide from '../../resourses/slider/slide.jpg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './mainSlider.scss';

const MainSlider = () => {

    const [pathname, setPathname] = useState(null);
    const [visibility, setVisibility] = useState(true);

    useEffect(() => {
        /* запускаем таймер с интревалом, по которому устанавливаем текущий pathname*/
        const timer = setInterval(() =>
            setPathname(window.location.pathname), 100)
        //отключаем таймер если unmount
        return () => clearInterval(timer)
    }, [])

    //не показываем slider на странице checkout
    useEffect(() => {
        if (pathname === '/checkout') {
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }, [pathname])

    return (
        <section style={visibility ? null : { display: 'none' }}>
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={true}
                navigation={true}
                className="mySwiper">

                <SwiperSlide>
                    <img src={slide} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide} alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide} alt="slide" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default MainSlider;