import { useState, useEffect } from 'react';
import Modal from "../modal/Modal";
import Loader from "../loader/Loader";
import plus from '../../resourses/icons/plus.svg';
import minus from '../../resourses/icons/minus.svg';
import './cartItem.scss';

//как-будто запросы на корзину
import menu from '../../data/menu.json';

/*сюда должен приходить айди продукта/элемента В КОРЗИНЕ,
который передаем в модалку, чтобы срендерить модалку для изменения продукта В КОРЗИНЕ */

const CartItem = (props) => {

    const productId = props.productId;

    const [modalActive, setModalActive] = useState(false);

    const [product, setProduct] = useState(null);

    //функция получает obj продукта по id
    // в оигинале нужно получать не из меню, а из КОРЗИНы
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
                    productId={productId}
                    product={product}
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                />
                : <Loader />}
        </>
    )
}

const View = (props) => {

    const { productId, product, modalActive, setModalActive } = props;
    const price = `${product.price} ₴`;

    return (
        <div className="cart-item">
            <div class="cart-item__counter">1 x</div>
            <div class="cart-item__name">{product.name}</div>
            <div class="cart-item__price">{price}</div>
            <div class="cart-item__empty"></div>
            <div class="cart-item__empt"></div>
            <div class="cart-item__mods">
                <div className="cart-item__mod">Сирний</div>
                <div className="cart-item__mod">BBQ</div>
            </div>
            <div class="cart-item__minus">
                <img src={minus} alt="minus" className="minus" />
            </div>
            <div class="cart-item__plus">
                <img src={plus} alt="plus" className="plus" />
            </div>
            <div
                onClick={() => setModalActive(!modalActive)}
                class="cart-item__changer">
                Змінити
            </div>
            <Modal
                productId={productId}
                modalActive={modalActive}
                setModalActive={setModalActive}
                buttonText={"Зберегти зміни"}
            >
            </Modal>
        </div>
    )
}

export default CartItem;