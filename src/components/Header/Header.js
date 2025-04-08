import styles from "./Header.module.css";
import Nav from "../Nav/Nav.js"
import logo from "../../assets/Logo.svg"
import hamburderMenu from "../../assets/hamburgerMenu.svg"

const Header = () => {

    return (

      <header>
       <img src={logo} alt="Logo" />
       <div className={styles.nav}>
       <Nav />
       </div>
     
       <img src={hamburderMenu} alt="hamburderMenu" className={styles.hamburgerIcon}/>
     
      </header>


    )
}

export default Header;