import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './langToggler.scss';

const LangToggler = () => {

    const options = [
        'UA', 'UK', 'RU'
    ];
    const defaultOption = options[0];

    return (
        <Dropdown
            options={options}
            onChange={() => console.log(1)}
            value={defaultOption}
            className='lang-toggler' />
    )
}

export default LangToggler;