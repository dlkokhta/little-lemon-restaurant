import styles from "./HamburgerMenu.module.css";
import Nav from "../Nav/Nav";
import exit from "../../assets/exit.png";

const HamburgerMenu = ({ setIsMenuOpen }) => {
  return (
    <div className={styles.burderMenuContainer}>
      <div className={styles.burderMenuContainer2}>
        <Nav />
        <img
          alt="exit icon"
          src={exit}
          onClick={() => {
            setIsMenuOpen(false);
          }}
        />
      </div>
    </div>
  );
};

export default HamburgerMenu;
