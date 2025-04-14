import styles from "./About.module.css";
import marioAndAdrian1 from "../../assets/marioAndAdrian1.jpg";
import marioAndAdrian2 from "../../assets/marioAndAdrian2.jpg";

const About = () => {
  return (
    <div className={styles.aboutContainer} aria-labelledby="about-heading">
      <div>
        <h1>Little Lemon</h1>
        <h2 aria-labelledby="about-heading">Chicago</h2>
        <p aria-describedby="about-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua
        </p>
      </div>

      <div className={styles.aboutImagesContainer}>
        <div className={styles.aboutContainerImage1}>
          <img src={marioAndAdrian1} alt="marioAndAdrian1" />
        </div>
        <div className={styles.aboutContainerImage2}>
          <img src={marioAndAdrian2} alt="marioAndAdrian2" />
        </div>
      </div>
    </div>
  );
};

export default About;
