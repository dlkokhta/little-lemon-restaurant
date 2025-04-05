import logo from "../assets/Logo.svg";
import Nav from "./Nav";

const Footer = () => {
  return (
    <>
      <div>
     
        <img src={logo} alt="logo" />
      </div>

      <section>
        <h4>Navigation</h4>
        <Nav />
      </section>

      <section>
        <h2>Contact</h2>
        <address>
            <p>123 Main St, City, Country</p>
            <p>Phone: +123456789</p>
            <p>Email: littlelemon@littlelemon.com</p>
        </address>
      </section>
      <section>
        <h2>Social Media</h2>
        <ul>
            <li>facebook</li>
            <li>x</li>
            <li>instagram</li>
            <li>youtube</li>
        </ul>
      </section>
    </>
  );
};

export default Footer;
