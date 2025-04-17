import styles from "./Nav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  return (
    <nav className={styles.mainNav} aria-label="Main navigation">
      <ul>
        <li>
          <Link smooth to="/" aria-current="page">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#about" aria-label="Navigate to the About section">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/#menu" aria-label="Navigate to the Menu section">
            Menu
          </Link>
        </li>
        <li>
          <Link
            smooth
            to="/booking"
            aria-label="Navigate to the Reservation page"
          >
            Reservation
          </Link>
        </li>
        <li>
          <a href="#orderOnline" aria-label="Order food online">
            Order Online
          </a>
        </li>
        <li>
          <a href="#login" aria-label="Log in to your account">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
