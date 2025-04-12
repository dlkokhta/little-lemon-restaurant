import styles from "./FooterNav.module.css";
import { HashLink as Link } from "react-router-hash-link";

const FooterNav = () => {
  return (
    <nav className={styles.footerNavContainer}>
      <ul>
        <li>
          <Link smooth to="/#home">
            Home
          </Link>
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
          <a href="#orderOnline">Order Onlin</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
