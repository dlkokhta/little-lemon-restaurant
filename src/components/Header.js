import Nav from "./Nav";
import logo from "../assets/Logo.svg";

const Header = () => {

    return (

      <header>
        <img src={logo} alt="Logo" />
       <Nav />
      </header>


    )
}

export default Header;