import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import slide from '../../resourses/slider/slide.jpg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './mainSlider.scss';

const MainSlider = () => {

    const [visibility, setVisibility] = useState(true);

    //не показываем slider на странице checkout
    useEffect(() => {
        if (window.location.pathname === '/checkout')
            setVisibility(false)
    }, [])

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