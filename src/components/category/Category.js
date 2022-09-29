import { useRef, useEffect, useState } from 'react';
import Product from '../product/Product';
import './category.scss';


const Category = (props) => {
    const { categoryName, id, products, addRefToRefs, setActiveCategory, setConfirmerVisibility } = props;

    const categoryRef = useRef(null);

    //вот это не убирать, нигде не используется, но без него не работает
    const [scrollTop, setScrollTop] = useState(0);

    const [offsetTop, setOffsetTop] = useState(0);

    // 1. когда элемент срендерился
    useEffect(() => {
        //Добавляем реф категории в массив рефов 
        addRefToRefs(categoryRef)

        /* запускаем таймер с интревалом, по которому устанавливаем фактическое смещение категории (рефа)
        onScroll не работает в этом случае*/
        const timer = setInterval(() =>
            setOffsetTop(categoryRef.current.getBoundingClientRect().y), 100);
        //отключаем таймер если unmount
        return () => clearInterval(timer)
    }, [])

    //2. когда категория оказывается на расстоянии 348 пикселей от верха экрана, назначаем ее активной,
    //   ее реф поднимаем выше
    // если клиент на десктопе, то активная категория не устанавливается
    useEffect(() => {
        if ((offsetTop > 0 && offsetTop < 348) && (window.innerWidth <= 767.98)) {
            setActiveCategory(categoryRef)
        }
        // eslint-disable-next-line
    }, [offsetTop])


    const productsList = products.map(product => {
        const { uniq_id, name, description, image_url_png, price, isNew, attributes_groups } = product;
        return (
            <Product
                key={uniq_id}
                id={uniq_id}
                name={name}
                description={description}
                img={image_url_png}
                price={price}
                isNew={isNew}
                setConfirmerVisibility={setConfirmerVisibility}
                attributes_groups={attributes_groups}
            />
        )
    })

    return (
        <>
            <div className="category__name" ref={categoryRef} id={id}>{categoryName}</div>
            <div className="category__products">
                {productsList}
            </div>
        </>
    )
}

export default Category;