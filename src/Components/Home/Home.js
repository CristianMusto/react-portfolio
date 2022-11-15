import Container from "../Helpers/Container/Container";
import About from "./About/About";
import Cover from "./Cover/Cover";
import Knowledge from "./Knowledge/Knowledge";
import Projects from "./Projects/Projects";


const Home = props => {
    return (
        <Container>
            <Cover theme={props.theme}/>
            <About />
            <Knowledge />
            <Projects />
        </Container>
    )
}

export default Home;