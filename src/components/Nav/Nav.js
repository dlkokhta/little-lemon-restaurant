import styles from "./Nav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <Link smooth to="/#about">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/#menu">
            Menu
          </Link>
        </li>
        <li>
          <a href="#reservation">Reservation</a>
        </li>
        <li>
          <a href="#orderOnline">Order Online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
