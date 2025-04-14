import footerLogo from "../../assets/footerLogo.png";
import FooterNav from "../FooterNav/FooterNav";
import styles from "./Footer.module.css";
import location from "../../assets/location.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import x from "../../assets/x.png";
import youtube from "../../assets/youtube.png";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerContainerLogo}>
        <img
          src={footerLogo}
          alt="Little Lemon restaurant logo"
          aria-label="Little Lemon Logo"
        />
      </div>

      <div className={styles.footerContainer2}>
        <h4>NAVIGATION</h4>
        <div>
          <FooterNav />
        </div>
      </div>

      <div className={styles.footerContainer3}>
        <h3>CONTACT</h3>
        <address>
          <div className={styles.addressContainer}>
            <img src={location} alt="Location icon" aria-label="Location" />
            <p>123 Main St, City, Country</p>
          </div>
          <div className={styles.addressContainer}>
            <img src={phone} alt="Phone icon" aria-label="Phone" />
            <p>Phone: +123456789</p>
          </div>

          <div className={styles.addressContainer}>
            <img src={email} alt="Email icon" aria-label="Email" />
            <p>Email: little@lemon.com</p>
          </div>
        </address>
      </div>

      <div className={styles.footerContainer4}>
        <h2>SOCIAL MEDIA</h2>
        <div className={styles.footerContainer4SocialMedia}>
          <a href="https://facebook.com" aria-label="Facebook">
            <img src={facebook} alt="Facebook logo" />
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <img src={instagram} alt="Instagram logo" />
          </a>
          <a href="https://x.com" aria-label="Twitter">
            <img src={x} alt="X logo" />
          </a>
          <a href="https://youtube.com" aria-label="YouTube">
            <img src={youtube} alt="YouTube logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
