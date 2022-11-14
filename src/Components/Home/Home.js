import Container from "../Helpers/Container/Container";
import About from "./About/About";
import Cover from "./Cover/Cover";


const Home = props => {
    return (
        <Container>
            <Cover theme={props.theme}/>
            <About />
        </Container>
    )
}

export default Home;