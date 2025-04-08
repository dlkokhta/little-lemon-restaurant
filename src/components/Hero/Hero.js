import restauranfood from "../../assets/restauranfood.jpg"
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <img src={restauranfood} alt="restauranfood"/>
    </div>
  );
};

export default Hero;
