import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.svg";
import hamburderMenu from "../../assets/hamburgerMenu.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
        />
      </div>
    </header>
  );
};

export default Header;
