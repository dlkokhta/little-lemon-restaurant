import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.svg";
import hamburderMenu from "../../assets/hamburgerMenu.svg";
import { Link } from "react-router-dom";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const hamburgerHandleClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo" aria-label="Little Lemon Logo" />
      </Link>
      <div className={styles.headerNav}>
        <Nav />
      </div>

      <div
        className={styles.headerHamburgerContainer}
        aria-label="Toggle navigation menu"
        aria-expanded="false"
      >
        <img
          src={hamburderMenu}
          alt="Hamburger menu icon"
          className={styles.hamburgerIcon}
          onClick={hamburgerHandleClick}
        />
      </div>
      {isMenuOpen && <HamburgerMenu setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
};

export default Header;
