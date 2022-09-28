import { useState } from "react";

import plus from '../../resourses/icons/plus.svg';
import minus from '../../resourses/icons/minus.svg';
import './qtyCounter.scss';

const QtyCounter = () => {

    const [quantity, setQuantity] = useState(1);

    const incraeseQty = () => {
        setQuantity(quantity => quantity + 1)
    }

    const decraeseQty = () => {
        if (quantity > 1) {
            setQuantity(quantity => quantity - 1)
        }
    }

    return (
        <div className="qtyCounter">
            <img src={minus} alt="minus" onClick={() => decraeseQty()} />
            <div className="qtyCounter-num">{quantity}</div>
            <img src={plus} alt="plus" onClick={() => incraeseQty()} />
        </div>
    )
}

export default QtyCounter;