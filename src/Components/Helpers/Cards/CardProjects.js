import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const CardProjects = (props) => {
  return (
    <div>
      <div className={props.classNamePic}>
        <a href={props.href != "" && `${props.href}`}>
          {props.src != "" && <img src={props.src} alt={props.alt} />}
        </a>
      </div>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      {props.hrefIcon != "" && <ul className={props.classNameSocials}>
        <li>
          <a href={props.hrefIcon} target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faArrowRight}
              className={props.classNameIcon}
            />
          </a>
        </li>
      </ul>}
      <p>{props.credits}</p>
    </div>
  );
};

export default CardProjects;
