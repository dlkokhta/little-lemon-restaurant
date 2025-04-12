import styles from "./Header.module.css";
import Nav from "../Nav/Nav";
import logo from "../../assets/Logo.svg";
import hamburderMenu from "../../assets/hamburgerMenu.svg";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <div className={styles.headerNav}>
        <Nav />
      </div>

      <div className={styles.headerHamburgerContainer}>
        <img
          src={hamburderMenu}
          alt="hamburderMenu"
          className={styles.hamburgerIcon}
        />
      </div>
    </header>
  );
};

export default Header;
