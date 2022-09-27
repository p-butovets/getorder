/*коппонент должен получать тотал из корзины */
import './total.scss';

const Total = () => {
    return (
        <div className="total">
            <div className="total-item">
                <div className="total-item__title">Доставка</div>
                <div className="total-item__price">40 ₴</div>
            </div>
            <div className="total-item">
                <div className="total-item__title">Сума замовлення</div>
                <div className="total-item__price">365 ₴</div>
            </div>
            <div className="total-item">
                <div className="total-item__title">Загалом</div>
                <div className="total-item__price">405 ₴</div>
            </div>
        </div>
    )
}

export default Total;