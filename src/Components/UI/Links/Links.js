import { Link } from "react-scroll";

const LinkComponent = (props) => {
  return (
    <Link
      to={props.to}
      activeClass="active"
      spy={true}
      smooth={true}
      offset={props.offset}
      duration={1000}
      delay={250}
    >
      <h3>{props.text}</h3>
    </Link>
  );
};

export default LinkComponent;
