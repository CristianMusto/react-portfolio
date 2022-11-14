import style from "./Header.module.scss";
import LinkComponent from "../../UI/Links/Links";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className={style.headerContainer}>
        <div className={style.headerMenu}>
          <ul className={style.listMenu}>
            <li className={style.menuItem}>
              <LinkComponent to="About" offset={-250} text="About" />
            </li>
            <li className={style.menuItem} style={{ marginleft: "-5%" }}>
              <LinkComponent to="Knowledge" offset={-250} text="Knowledge" />
            </li>
            <li className={`${style.menuItem} ${style.logo}`}>
              <Link
                to="Cover"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={250}
              >
                <h3 data-text="CM" className={style.logo}>
                  CM
                </h3>
              </Link>
            </li>
            <li className={style.menuItem}>
              <LinkComponent to="Projects" offset={-250} text="Projects" />
            </li>
            <li className={style.menuItem}>
              <LinkComponent to="Socials" offset={-250} text="Socials" />
            </li>
          </ul>
        </div>
        <div className={style.headerMenuMobile} style={{ display: "none" }}>
          <div className={style.hambMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={style.listmenu}>
            <li className={style.menuItem}>
              <LinkComponent to="About" offset={-100} text="About" />
            </li>
            <li className={style.menuItem}>
              <LinkComponent to="Knowledge" offset={-100} text="Knowledge" />
            </li>
            <li className={`${style.menuItem} ${style.logo}`}>
              <Link
                to="Cover"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={250}
              >
                <h3 data-text="CM" className={style.logoMobile}>
                  CM
                </h3>
              </Link>
            </li>
            <li className={style.menuItem}>
              <LinkComponent to="Projects" offset={-100} text="Projects" />
            </li>
            <li className={style.menuItem}>
              <LinkComponent to="Socials" offset={-100} text="Socials" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
