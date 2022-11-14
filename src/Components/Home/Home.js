import Container from "../Helpers/Container/Container";
import Cover from "./Cover/Cover";


const Home = props => {
    return (
        <Container>
            <Cover theme={props.theme}/>
        </Container>
    )
}

export default Home;