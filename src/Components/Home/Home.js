import About from "./About/About";
import Cover from "./Cover/Cover";
import Knowledge from "./Knowledge/Knowledge";
import Projects from "./Projects/Projects";


const Home = props => {
    return (
        <>
            <Cover theme={props.theme}/>
            <About />
            <Knowledge />
            <Projects />
        </>
    )
}

export default Home;