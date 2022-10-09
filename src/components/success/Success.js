import Button from '../button/Button';
import cat from '../../resourses/gif/cat.webp';
import './success.scss';

const Success = (props) => {

    const { modalActive, setModalActive } = props;

    return (
        <div className="success">
            <div className="success-heading">Ваше замовлення
                оформлено</div>
            <img className='success-cat' src={cat} alt="cat" />
            <div className="success-description">Ваше замовлення надіслано.
                Ви можете перевірити статус в своєму кабінеті</div>
            <Button
                className={'button_wide'}
                modalActive={modalActive}
                setModalActive={setModalActive}>
                <div>В КАБІНЕТ</div>
            </Button>
        </div>
    )
}

export default Success;