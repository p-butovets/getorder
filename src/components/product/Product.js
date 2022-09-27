import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Modal from '../modal/Modal';
import QtyCounter from '../qtyCounter/QtyCounter';
import Button from '../button/Button';
import Modifier from '../modifier/Modifier';
import plus from "../../resourses/products/plus.svg";
import './product.scss';


const Product = (props) => {

    const { name, id, setConfirmerVisibility, img, attributes_groups } = props;
    const price = `${props.price} ₴`;
    const description = props.description
        ? props.description.slice(0, 90)
        : `Це ${props.name.toLowerCase()}, нічого більше ми про це не знаємо`
    const [modalActive, setModalActive] = useState(false);


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
            <div
                className="product"
                onClick={() => setModalActive(true)}
            >

                <div className="product__view">
                    <div className="product__info">
                        <div className="product__name">{name}</div>
                        <div className="product__description">{description}</div>
                    </div>
                    <img src={img} alt={name} className="product__img" />
                </div>

                <div className="product__func">
                    <div className="product__price">{price}</div>
                    <img src={plus} alt="add" />
                </div>
            </div>

            <Modal active={modalActive} setActive={setModalActive}>
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
                                <div>додати за {price}</div>
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
                    <div className="product-mob__button">
                        <Button
                            key={uuidv4()}
                            className={'button_wide'}
                            setModalActive={setModalActive}
                            modalActive={modalActive}
                            setConfirmerVisibility={setConfirmerVisibility}
                        >
                            <div>додати за {price}</div>
                        </Button>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default Product;