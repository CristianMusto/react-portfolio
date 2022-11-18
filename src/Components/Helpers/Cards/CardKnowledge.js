const CardKnowledge = props => {
    return (
        <div>
            <div className={props.classNamePic}>
                {props.src !== "" && <img src={props.src} alt={props.alt}/>}
            </div>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}

export default CardKnowledge;