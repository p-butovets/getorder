import { useState } from "react";

import plus from '../../resourses/icons/plus.svg';
import minus from '../../resourses/icons/minus.svg';
import './qtyCounter.scss';

const QtyCounter = (props) => {

    const [quantity, setQuantity] = useState(1);

    const changeQuantity = (num) => {
        setQuantity(quantity => quantity + num)
    }

    return (
        <div className="qtyCounter">
            <img src={minus} alt="minus" onClick={() => changeQuantity(-1)} />
            <div className="qtyCounter-num">{quantity}</div>
            <img src={plus} alt="plus" onClick={() => changeQuantity(1)} />
        </div>
    )
}

export default QtyCounter;