import './langToggler.scss';
import caretDown from '../../resourses/header/caret_down.svg';

const LangToggler = () => {
    return (
        <div className="lang-toggler">
            <div className="lang-toggler-text">UK</div>
            <img className="lang-toggler-caret" src={caretDown} alt="caret down" />
        </div>
    )
}

export default LangToggler;