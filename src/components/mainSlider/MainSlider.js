import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import slide from '../../resourses/slider/slide.jpg';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './mainSlider.scss';

const MainSlider = () => {
    return (
        <section>
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