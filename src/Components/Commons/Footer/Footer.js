import style from "./Footer.module.scss";
import cv from "../../../Assets/images/cv/CristianMustoEnglish-1.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const Footer = () => {
    return (
      <footer>
        <Element name="Socials" className={style.container}>
          <ul className={style.socialIcons}>
            <li>
              <a href="https://www.linkedin.com/in/cristian-musto-7b3b181b8/">
                <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/NightSky11">
                <FontAwesomeIcon icon={faGithub} className={style.icon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_cristian_musto_/">
                <FontAwesomeIcon icon={faInstagram} className={style.icon} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/NightSky1100">
                <FontAwesomeIcon icon={faTwitter} className={style.icon} />
              </a>
            </li>
          </ul>
          <div className={style.cvContactContainer}>
            <div className={style.contact}>
              <a href="mailto:cristian.musto00@gmail.com">Contact me</a>
            </div>
            <p>OR</p>
            <div className={style.cv}>
              <a href={cv} target="_blank" rel="noreferrer">
                Here's my CV
              </a>
            </div>
          </div>
          <div className={style.credits}>
            <p>Created and written by Cristian Musto.</p>
          </div>
        </Element>
      </footer>
    );
}

export default Footer;