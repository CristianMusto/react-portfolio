import style from "./Header.module.scss";
import LinkComponent from "../../UI/Links/Links";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Header = () => {

  const [isMobile, setIsMobile] = useState();
  const [isOpen, setIsOpen] = useState();

  const checkSizes = () => {
    if (window.outerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const menuOpen = () => {
    if (isOpen) {
      setIsOpen(false)
    } else {
      setIsOpen(true)
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener("load", checkSizes)
  }, [])

  return (
    <header>
      <div className={style.headerContainer}>
        <div
          className={style.headerMenu}
          style={isMobile ? { display: "none" } : { display: "block" }}
        >
          <ul className={style.listMenu}>
            <li className={style.menuItem}>
              <LinkComponent
                to="About"
                offset={-250}
                text="About"
                activeClass={style.active}
              />
            </li>
            <li className={style.menuItem} style={{ marginleft: "-5%" }}>
              <LinkComponent
                to="Knowledge"
                offset={-250}
                text="Knowledge"
                activeClass={style.active}
              />
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
              <LinkComponent
                to="Projects"
                offset={-250}
                text="Projects"
                activeClass={style.active}
              />
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Socials"
                offset={-250}
                text="Socials"
                activeClass={style.active}
              />
            </li>
          </ul>
        </div>
        <div
          className={`${style.headerMenuMobile} ${
            isOpen ? style.active : style.notActive
          }`}
          style={isMobile ? { display: "block" } : { display: "none" }}
        >
          <div
            className={`${style.hambMenu} ${
              isOpen ? style.active : style.notActive
            }`}
            onClick={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={style.listMenu}>
            <li className={style.menuItem}>
              <LinkComponent
                to="About"
                offset={-100}
                text="About"
                activeClass={style.active}
                onClick={closeMenu}
              />
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Knowledge"
                offset={-100}
                text="Knowledge"
                activeClass={style.active}
                onClick={closeMenu}
              />
            </li>
            <li className={`${style.menuItem} ${style.logo}`}>
              <Link
                to="Cover"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
                delay={250}
                onClick={closeMenu}
              >
                <h3 data-text="CM" className={style.logoMobile}>
                  CM
                </h3>
              </Link>
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Projects"
                offset={-100}
                text="Projects"
                activeClass={style.active}
                onClick={closeMenu}
              />
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Socials"
                offset={-100}
                text="Socials"
                activeClass={style.active}
                onClick={closeMenu}
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
