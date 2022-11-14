import Container from "../../Helpers/Container/Container";
import ParticlesComponent from "../../UI/Particles/Particles";
import style from "./Cover.module.scss";

const Cover = props => {
    return (
        <Container className={style.cover} data-aos="fade-down" data-aos-duration="500">
            <h1 data-text="Cristian Musto">Cristian Musto</h1>
            <p>Front-End developer</p>
            <ParticlesComponent className={style.backgroundCover} theme={props.theme}/>
        </Container>
    )
}

export default Cover;