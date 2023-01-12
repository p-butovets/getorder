import './heading.scss';


const Heading = (props) => {

    const { description } = props;

    return (
        <div className="brand-heading">
            <div className="brand-heading__name">
                IlMolino
            </div>
            <div className="brand-heading__description">
                {description}
            </div>
        </div>
    )
}

export default Heading;