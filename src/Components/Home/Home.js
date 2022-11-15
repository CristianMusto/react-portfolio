import Container from "../Helpers/Container/Container";
import About from "./About/About";
import Cover from "./Cover/Cover";
import Knowledge from "./Knowledge/Knowledge";


const Home = props => {
    return (
        <Container>
            <Cover theme={props.theme}/>
            <About />
            <Knowledge />
        </Container>
    )
}

export default Home;