import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import QtyCounter from '../qtyCounter/QtyCounter';
import Button from '../button/Button';
import Modifier from '../modifier/Modifier';
import Loader from '../loader/Loader';
import './productPop.scss';

//как-будто запросы на бекенд
import menu from '../../data/menu.json';

const ProductPop = (props) => {

    const { productId, setConfirmerVisibility, modalActive, setModalActive, buttonText } = props;

    const [product, setProduct] = useState(null);

    //функция получает obj продукта по id
    const getProductDyId = (id) => {
        for (let section of menu.data.sections) {
            for (let i in section.products) {
                if (section.products[i].uniq_id === id) {
                    return section.products[i]
                }
            }
        }
    }

    //когда рендерится єлемент, получаем инфу по продукту
    useEffect(() => {
        setProduct(getProductDyId(productId))
    }, [])

    return (
        <>
            {product ?
                <View
                    product={product}
                    setConfirmerVisibility={setConfirmerVisibility}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    buttonText={buttonText}
                />
                : <Loader />}
        </>
    )
}

const View = (props) => {

    const { product, setConfirmerVisibility, modalActive, setModalActive, buttonText } = props;
    const { name, id, attributes_groups } = props.product;
    const img = product.image_url_webp;
    const price = `${product.price} ₴`;
    const description = product.description
        ? product.description.slice(0, 90)
        : `Це ${name.toLowerCase()}, нічого більше ми про це не знаємо`;

    const modifiers = attributes_groups.map(attribute => {
        return (
            <Modifier
                key={attribute.id}
                attribute={attribute}
                isOnLeft={false}
            />)
    })


    return (
        <>
            <div className="product-pop">
                <div className="product-pop__info">
                    <img src={img} alt={name} className="product-pop__img" />
                    <div className="product-pop__heading">
                        <div className="product-pop__name">{name}</div>
                        <div className="product-pop__price">{price}</div>
                    </div>
                    <div className="product-pop__description">{description}</div>
                    <div className="product-pop__counter">
                        <QtyCounter />
                    </div>
                    <div className="product-pop__button">
                        <Button
                            key={uuidv4()}
                            className={'button_wide'}
                            setModalActive={setModalActive}
                            modalActive={modalActive}
                            setConfirmerVisibility={setConfirmerVisibility}
                        >
                            <div>{buttonText ? buttonText : `додати за ${price}`}</div>
                        </Button>
                    </div>
                </div>
                <div className="product-pop__mods">
                    {(attributes_groups.length > 0)
                        ? modifiers
                        :
                        <div className="product-pop__heading">
                            У цього товару немає додаткових опцій
                        </div>}
                </div>
            </div>

            <div className="product-mob">
                <img src={img} alt={name} className="product-mob__img" />
                <div className="product-mob__heading">
                    <div className="product-mob__name">{name}</div>
                    <div className="product-mob__price">{price}</div>
                </div>
                <div className="product-mob__description">{description}</div>
                {modifiers}
                <div className="product-mob__counter">
                    <QtyCounter key={uuidv4()} />
                </div>
                <div className="product-mob__whitespace"></div>
                <div className="product-mob__button">
                    <Button
                        key={uuidv4()}
                        className={'button_wide'}
                        setModalActive={setModalActive}
                        modalActive={modalActive}
                        setConfirmerVisibility={setConfirmerVisibility}
                    >
                        <div>{buttonText ? buttonText : `додати за ${price}`}</div>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default ProductPop;