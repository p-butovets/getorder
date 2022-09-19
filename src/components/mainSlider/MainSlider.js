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
                    <img src='https://bagatolososia.kiev.ua/image/cache/catalog/Sushi-Roli/__2%20(4)-1000x1000.jpg' alt="slide" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='https://bagatolososia.kiev.ua/image/cache/catalog/Sushi-Roli/FV2-1000x1000.jpg' alt="slide" />
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default MainSlider;