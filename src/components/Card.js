function Card(props) {
    return(
        <section className="card">
            <img src={props.img} alt="" className="card--image" />
            <div className="card--stats">
                <img src="Star.png" alt="" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </section>
    )
}

export default Card;