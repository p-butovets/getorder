import { useEffect, useState, useRef } from 'react';
import './modifier.scss';


const Modifier = (props) => {
    const { id, isRequired, items, min, max, name } = props.attribute;

    // собираем рефы элементов для реализации выбора "один из"
    // при выборе одного из этой группы у остальных снимаем класс _checked
    // рефы складываются когда создается item
    const [itemRefs, setItemRefs] = useState([])

    // Функция складывает рефы item
    const addRef = (newRef) => {
        setItemRefs(itemRefs => ([...itemRefs, newRef]))
    }

    // функция снимает все классы _checked с группы рефы item
    const removeChecked = () => {
        for (let i in itemRefs) {
            itemRefs[i].current.className = "modifier__name"
        }
    }

    const addChecked = (ref) => {
        for (let i in itemRefs) {
            if (ref === itemRefs[i]) {
                ref.current.className = "modifier__name_checked"
            }
        }
    }

    const modifierItems = items.map(item => {
        return (
            <ModifierItem key={item.id} item={item} max={max} addRef={addRef} removeChecked={removeChecked} addChecked={addChecked} />
        )
    })

    return (
        <div className="modifier__wrapper">
            <div className="modifier">
                <div className="modifier__title">{name}</div>
                {modifierItems}
            </div>
        </div>
    )
}

const ModifierItem = (props) => {
    const { available, id, is_active, name, price_impact, selected_by_default } = props.item;
    const addChecked = props.addChecked;
    const removeChecked = props.removeChecked;
    const addRef = props.addRef;
    const max = props.max;

    const [isChecked, setIsChecked] = useState(selected_by_default)

    //нулевую цену модификатора не показываем (пустая строка)
    const price = (price_impact === "0") ? '' : `+${price_impact} ₴`;

    //когда создается элемент, его реф оправляем в список рефов группы
    const modItemRef = useRef(null)

    useEffect(() => {
        addRef(modItemRef)
    }, [])

    const onCheckBoxClick = () => {
        setIsChecked(!isChecked)
    }

    const onRadioButtonClick = () => {
        removeChecked()
        addChecked(modItemRef)
        setIsChecked(true)
    }

    // если max > 1, то нужно сформировать как input checkbox (множественный выбор)
    // элементы отличаются колбеком по клику
    // если max >= 1, то нужно сформировать как input radio (выбор "один из")
    return (
        <div className="modifier__item" onClick={(available && max > 1) ? onCheckBoxClick : onRadioButtonClick} >
            <div className={isChecked ? 'modifier__name_checked' : 'modifier__name'} ref={modItemRef}>
                {name}
            </div>
            <div className="modifier__price">{price}</div>
        </div>
    )
}

export default Modifier;