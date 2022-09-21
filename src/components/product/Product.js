import { useState } from 'react';
// import Modifier from '../modifier/Modifier';
// import ProductFooter from '../productFooter/ProductFooter';
import plus from "../../resourses/products/plus.svg";
import './product.scss';


const Product = (props) => {

    const { name, id, isNew, setConfirmerVisibility, img, attributes_groups } = props;
    const price = `${props.price} ₴`;
    const description = props.description ? props.description.slice(0, 90) : `Це ${props.name.toLowerCase()}, нічого більше ми про це не знаємо`


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
        <div className={`product`}>

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

            {/* <ProductFooter
                isExpanded={isExpanded}
                setConfirmerVisibility={setConfirmerVisibility}
                onProductAdd={onProductAdd}
                id={id}
                name={name}
                //цену берем из пропсов, да. Потому что нужен без знака грн
                price={props.price}
                img={img}
            /> */}

        </div>
    )
}

export default Product;