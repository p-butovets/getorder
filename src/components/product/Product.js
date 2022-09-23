import { useState } from 'react';
import Modal from '../modal/Modal';
// import Modifier from '../modifier/Modifier';
import plus from "../../resourses/products/plus.svg";
import './product.scss';


const Product = (props) => {

    const { name, id, setConfirmerVisibility, img, attributes_groups } = props;
    const price = `${props.price} ₴`;
    const description = props.description
        ? props.description.slice(0, 90)
        : `Це ${props.name.toLowerCase()}, нічого більше ми про це не знаємо`
    const [modalActive, setModalActive] = useState(false);


    // const modifiers = attributes_groups.map(attribute => {
    //     return (
    //         <Modifier
    //             key={attribute.id}
    //             attribute={attribute}
    //             isExpanded={isExpanded}
    //             isOnLeft={false}
    //         />)
    // })

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
                {/* {modifiers} */}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="product-pop">
                    <div className="product-pop__info">{name}</div>
                    <div className="product-pop__mods">{description}</div>
                </div>
            </Modal>
        </>
    )
}

export default Product;