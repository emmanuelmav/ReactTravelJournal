import ping from '../assets/location.svg'

const Card = (props) => {
    console.log(props.card)
    return (
        <div className="card">
            <img className='card__img' src={props.card.imageUrl} alt="tourist attraction" />
            <div className='card__journal'>
                <span className='card__location'>
                    <img className='card__location--ping' src={ping} alt="map ping" />
                    {props.card.location}
                </span>
                <span className='card__location--google'>
                    View on Google Maps
                </span>
                <h1 className="card__title">{props.card.title}</h1>
                <h3 className='card__date'>
                    {props.card.startDate}-{props.card.endDate}
                </h3>
                <p className='card__description'>
                    {props.card.description}
                </p>
            </div>

        </div>

    )
}

export default Card;