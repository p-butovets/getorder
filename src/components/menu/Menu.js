import { useEffect } from 'react';

import Category from '../category/Category';
import Topbar from '../topbar/Topbar';

const Menu = (props) => {

    const {
        menu,
        categoryRefs,
        addRefToRefs,
        setActiveCategory,
        setConfirmerVisibility,
        activeCategory,
        orderRestaurant,
        setCategoryRefs,
        setOrderRestaurant,
        showTopBar
    } = props;

    //при нажатии "назад" удалаем все рефы категорий
    useEffect(() => {
        return () => {
            setCategoryRefs([])
        };
    },
        // eslint-disable-next-line
        []);

    const content = menu.data.sections.map(item => {
        return (
            <Category
                categoryName={item.name}
                id={item.uniq_id}
                products={item.products}
                key={item.uniq_id}
                addRefToRefs={addRefToRefs}
                setActiveCategory={setActiveCategory}
                setConfirmerVisibility={setConfirmerVisibility}
                orderRestaurant={orderRestaurant}
            />
        )
    })
    return (
        <>
            {content}
            <Topbar
                categoryRefs={categoryRefs}
                menu={menu}
                activeCategory={activeCategory}
                orderRestaurant={orderRestaurant}
                setOrderRestaurant={setOrderRestaurant}
                setCategoryRefs={setCategoryRefs}
                showTopBar={showTopBar}
            />
        </>
    )
}

export default Menu;