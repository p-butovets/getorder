import { useRef, useEffect, useState } from 'react';
import Product from '../product/Product';
import './category.scss';


const Category = (props) => {
    const { categoryName, id, products, addRefToRefs, setActiveCategory, setConfirmerVisibility } = props;

    const categoryRef = useRef(null);

    const [scrollTop, setScrollTop] = useState(0);
    const [offsetTop, setOffsetTop] = useState(0);

    // 1. когда элемент срендерился
    useEffect(() => {
        //Добавляем реф категории в массив рефов 
        addRefToRefs(categoryRef)

        //добавляем слушателль скролла
        window.addEventListener("scroll", handleScroll);

        //устанавливаем фактическое смещение категории (рефа)
        setOffsetTop(categoryRef.current.offsetTop)
        // eslint-disable-next-line
    }, [])


    //2. когда проиходит скролл, устанавливаем фактическое смещение категории (рефа)
    const handleScroll = () => {
        setOffsetTop(window.scrollY)
    };

    //3. когда категория оказывается на расстоянии 348 пикселей от верха экрана, назначаем ее активной,
    //   ее реф поднимаем выше
    // если клиент на десктопе, то активная категория не устанавливается
    useEffect(() => {
        const div = categoryRef.current.getBoundingClientRect();
        setScrollTop(div.y)
        if ((scrollTop > 0 && scrollTop < 348) && (window.innerWidth <= 767.98)) {
            setActiveCategory(categoryRef)
        }
        // eslint-disable-next-line
    }, [offsetTop])



    const productsList = products.map(product => {
        //как получить этот атрибут isNew? чтобы отображать бейдж "новинка"
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
            <div className="category__name" ref={categoryRef} onScroll={handleScroll} id={id}>{categoryName}</div>
            <div className="category__products">
                {productsList}
            </div>
        </>
    )
}

export default Category;