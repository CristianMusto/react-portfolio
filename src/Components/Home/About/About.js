import style from "./About.module.scss";
import epicode from "../../../Assets/images/epicode/attestatoEpicode.pdf";
import profilePic from "../../../Assets/images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Element } from "react-scroll";

const About = (props) => {
  return (
    <Element id="About" className={style.aboutContent}>
      <div
        className={style.aboutText}
        data-aos="fade-right"
        data-aos-duration="500"
      >
        <h2>Who am i?</h2>
        <p>
          Hi I am Cristian Musto, I was born on 11/08/2000 in Italy, from an
          early age I developed a strong interest in technology and video games,
          this interest grew with me until I embarked on the path of Front-end
          developer, but let's take a step back. As a high school I chose to
          attend an agricultural institute, but already in the early years I
          realised that this would not be my path, so in parallel I cultivated
          my skills in the field of computer science as a self-taught, at the
          beginning I studied html and css, then I moved on to the development
          of iOS apps with swift, creating clones of well-known apps, but I
          realised that I would have preferred to continue on the web so I
          decided to enrol in a school that could train me professionally as a
          Front-end developer. Thus began my journey at Epicode, which ended
          with, in my opinion, an excellent grade average and many new skills
          learned. I am always looking for a new challenge to complete my
          professional career and I do not fear any difficulties, this is my
          strength.
        </p>
        <br />
        <br />
        <div className={style.epicode}>
          <a href={epicode} target="_blank" rel="noreferrer">
            Epicode certificate
          </a>
        </div>
      </div>
      <div
        className={style.aboutCard}
        data-aos="fade-left"
        data-aos-duration="500"
      >
        <div className={style.profilePic}>
          <img src={profilePic} alt="profile" />
        </div>
        <h2>More about me</h2>
        <p>
          I am a young junior front-end developer strongly interested in the
          design and user experience part, with good knowledge of the logical
          part of a website and a strong desire to learn everything about this
          fantastic job.
        </p>
        <ul className={style.socialIcons}>
          <li>
            <a href="https://www.linkedin.com/in/cristian-musto-7b3b181b8/">
              <FontAwesomeIcon icon={faLinkedin} className={style.icon} />
            </a>
          </li>
          <li>
            <a href="https://github.com/CristianMusto">
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
      </div>
    </Element>
  );
};

export default About;
