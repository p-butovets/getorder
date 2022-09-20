import { useState } from 'react';
// import Modifier from '../modifier/Modifier';
// import ProductFooter from '../productFooter/ProductFooter';
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

            <div className={`product__wrapper`}>

                <div className={`product__img-place`}>
                    <img className={`product__img`} src={img} alt={name} />
                </div>

                <div className={`product__info-card`} >
                    <div className={`product__name`}>{name}</div>
                    <div className={`product__description`}>{description}</div>
                    <div className={`product__badges`}>
                        <div className="product__price">{price}</div>
                        <div className="product__badge">новинка</div>
                    </div>
                </div>

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