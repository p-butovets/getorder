import './heading.scss';


const Heading = (props) => {

    return (
        <div className="brand-heading">
            <div className="brand-heading__name">
                Mamamia!
            </div>
            <div className="brand-heading__description">
                {props.description}
            </div>
        </div>
    )
}

export default Heading;