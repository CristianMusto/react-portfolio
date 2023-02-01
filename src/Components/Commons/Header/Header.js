import style from "./Header.module.scss";
import LinkComponent from "../../UI/Links/Links";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Header = (props) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };

  const [isMobile, setIsMobile] = useState();
  const [isOpen, setIsOpen] = useState();

  const [windowSize, setWindowSize] = useState(getWindowSize());

  const menuOpen = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    
    if (windowSize.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [windowSize]);

  return (
    <header>
      <div className={`${style.headerContainer} headerContainer`}>
        <div
          className={`${style.headerMenu} headerMenu`}
          style={isMobile ? { display: "none" } : { display: "block" }}
        >
          <ul className={`${style.listMenu} listMenu`}>
            <li className={`${style.menuItem} menuItem`}>
              <LinkComponent
                to="About"
                offset={-100}
                text="About"
                activeClass={style.active}
                onSetActive={props.onActive}
                onSetInactive={props.onInactive}
              />
            </li>
            <li className={style.menuItem} style={{ marginleft: "-5%" }}>
              <LinkComponent
                to="Certificates"
                offset={-100}
                text="Certificates"
                activeClass={style.active}
                onSetActive={props.onActive}
              />
            </li>
            <li className={`${style.menuItem} ${style.logo}`}>
              <Link
                to="Cover"
                spy={true}
                smooth={true}
                offset={0}
              >
                <h3 data-text="CM" className={style.logo}>
                  CM
                </h3>
              </Link>
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Knowledge"
                offset={-100}
                text="Knowledge"
                activeClass={style.active}
                onSetActive={props.onActive}
              />
            </li>
            <li className={style.menuItem}>
              <LinkComponent
                to="Projects"
                offset={-100}
                text="Projects"
                activeClass={style.active}
                onSetActive={props.onActive}
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
            } hambMenu`}
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
