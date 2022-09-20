import { useNavigate } from "react-router-dom";

import './orderType.scss';
import inrest_svg from '../../resourses/orderFormat/inrest.svg';
import delivery_svg from '../../resourses/orderFormat/delivery.svg';
import takeaway_svg from '../../resourses/orderFormat/takeaway.svg';

const OrderType = (props) => {

    const { setOrderType } = props;

    const handleClick = (type) => {
        setOrderType(type)
        navigate(`/restaurants`)
    }

    const navigate = useNavigate();

    return (
        <div className="order-type">
            <div className="order-type_item"
                onClick={() => handleClick('inrest')}>
                <div className="order-type_item-svg">
                    <img src={inrest_svg} alt="inrest" />
                </div>
                <div className="order-type_item-title">
                    Замовлення в закладі
                </div>
            </div>
            <div className="order-type_item"
                onClick={() => handleClick('delivery')}>
                <div className="order-type_item-svg">
                    <img src={delivery_svg} alt="delivery" />
                </div>
                <div className="order-type_item-title">
                    Доставка
                </div>
            </div>
            <div className="order-type_item"
                onClick={() => handleClick('takeaway')}>
                <div className="order-type_item-svg">
                    <img src={takeaway_svg} alt="takeaway" />
                </div>
                <div className="order-type_item-title">
                    Заберу сам
                </div>
            </div>
        </div>
    )

}

export default OrderType;