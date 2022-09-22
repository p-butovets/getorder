import plus from '../../resourses/icons/plus.svg';
import minus from '../../resourses/icons/minus.svg';
import './cartItem.scss';

const CartItem = () => {
    return (
        <div className="cart-item">
            <div className="cart-item__header">
                <div className="cart-item__counter">1x</div>
                <div className="cart-item__name">Godfather L</div>
                <div className="cart-item__price">365 ₴</div>
            </div>
            <div className="cart-item__mods">
                <div className="cart-item__mod">Сирний</div>
                <div className="cart-item__mod">BBQ</div>
            </div>

            <div className="cart-item__func">
                <img src={minus} alt="minus" className="minus" />
                <div className="cart-item__changer">Змінити</div>
                <img src={plus} alt="plus" className="plus" />
            </div>
        </div>
    )
}

export default CartItem;