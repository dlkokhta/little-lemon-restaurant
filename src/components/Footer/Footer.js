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
        <img src={footerLogo} alt="logo" />
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
            <img src={location} alt="location" />
            <p>123 Main St, City, Country</p>
          </div>
          <div className={styles.addressContainer}>
            <img src={phone} alt="phone" />
            <p>Phone: +123456789</p>
          </div>

          <div className={styles.addressContainer}>
            <img src={email} alt="email" />
            <p>Email: little@lemon.com</p>
          </div>
        </address>
      </div>

      <div className={styles.footerContainer4}>
        <h2>SOCIAL MEDIA</h2>
        <div className={styles.footerContainer4SocialMedia}>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={x} alt="x" />
          <img src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
