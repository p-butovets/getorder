import cat from '../../resourses/gif/cat.webp';
import './success.scss';

const Success = () => {

    return (
        <div className="success">
            <div className="success-heading">Ваше замовлення
                оформлено</div>
            <img className='success-cat' src={cat} alt="cat" />
            <div className="success-description">Ваше замовлення надіслано.
                Ви можете перевірити статус в своєму кабінеті</div>
        </div>
    )
}

export default Success;