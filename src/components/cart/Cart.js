import { useState, useEffect } from "react";
import CartItem from '../cartItem/CartItem';
import Button from '../button/Button';
import './cart.scss';

const Cart = () => {

    //для закрепления блока при скролле
    const [positionStyle, setPositionStyle] = useState({ position: "static" });
    // слушаем скролл
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    //на 300рх от верха - ставим positon fixed
    const handleScroll = () => {
        return window.scrollY >= 300 ?
            setPositionStyle({
                position: "fixed",
                top: "10px",
                width: "20%",
                maxWidth: "239px"
            })
            :
            setPositionStyle({ position: "static" })
    };


    return (
        <div className="cart" style={positionStyle}>
            <div className="nav-title">Ваше замовлення</div>
            <div className="cart-items">
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <Button className={'button_wide'}>
                замовити 4 позиції
            </Button>
        </div>

    )
}

export default Cart;