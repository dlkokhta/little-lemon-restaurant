import styles from "./FooterNav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const FooterNav = () => {
  return (
    <nav
      className={styles.footerNavContainer}
      role="navigation"
      aria-label="Footer Navigation"
    >
      <ul>
        <li>
          <Link smooth to="/#home" aria-label="Go to home section">
            Home
          </Link>
        </li>
        <li>
          <Link smooth to="/#about" aria-label="Go to about section">
            About
          </Link>
        </li>
        <li>
          <Link smooth to="/#menu" aria-label="Go to menu section">
            Menu
          </Link>
        </li>
        <li>
          <a href="#reservation" aria-label="Go to reservation section">
            Reservation
          </a>
        </li>
        <li>
          <a href="#orderOnline" aria-label="Go to order online section">
            Order Online
          </a>
        </li>
        <li>
          <a href="#login" aria-label="Go to login section">
            Login
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
