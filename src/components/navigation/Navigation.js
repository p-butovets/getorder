import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect } from 'react';
import 'swiper/css';
import './navigation.scss';

const Navigation = (props) => {
    // currentCategory - активная категория, которая устнавливается скроллом
    const { menu, categoryRefs, currentCategory } = props;

    // activeCategory - активная категория, которая устнавливается свайпером
    const [activeCategory, setActiveCategory] = useState(null);

    const [navItems, setNavItems] = useState(null);
    const [swiper, setSwiper] = useState(null);


    const createNavItems = () => {
        const slides = menu.data.sections.map(item => {
            return (
                <SwiperSlide
                    className="navbar-slide"
                    key={item.uniq_id}>
                    {({ isActive }) => (
                        <div
                            className={isActive ? "navbar-item navbar-item_active" : "navbar-item"}>
                            {item.name}</div>)}
                </SwiperSlide>
            )
        })
        setNavItems(slides);
    }

    const slideTo = (index) => {
        if (swiper)
            swiper.slideTo(index)
    };

    useEffect(() => {
        createNavItems()
        // eslint-disable-next-line
    }, [])

    //3. когда сменился стейт активной категории - скроллим на эту категорию
    useEffect(() => {
        if (activeCategory) {
            activeCategory.current.scrollIntoView({ block: 'center' })
        }
    }, [activeCategory])

    //4. следим за изменением активной категории при скролле
    useEffect(() => {
        const category = categoryRefs.findIndex(index => index === currentCategory)
        slideTo(category)
        // eslint-disable-next-line
    }, [currentCategory])


    return (
        <Swiper
            slidesPerView={2.4}
            onSwiper={(swiper) => setSwiper(swiper)}

            //1. клик по слйду прокручивает слайд на начало и активирует его
            onClick={(swiper) => slideTo(swiper.clickedIndex)}

            //2. после клика сменится слайд, или после свайпа сменится слайд, тогда реф активного слайда устнавливается в стейт
            onSlideChange={(swiper) => setActiveCategory(categoryRefs[swiper.activeIndex])}
        >   <div className="container">
                {navItems}
                <SwiperSlide className="navbar-slide"></SwiperSlide>
                <SwiperSlide className="navbar-slide"></SwiperSlide>
            </div>
        </Swiper>
    );
}

export default Navigation;