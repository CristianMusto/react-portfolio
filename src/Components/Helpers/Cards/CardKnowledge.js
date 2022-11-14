const CardKnowledge = props => {
    return (
        <div className={props.classNameCard} style={{boxShadow: `0 0 20px 10px ${props.shadow}`}}>
            <div className={props.classNamePic}>
                <img src={props.src} className='swiper-lazy' alt={props.alt}/>
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default CardKnowledge;