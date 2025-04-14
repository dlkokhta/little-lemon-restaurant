import restauranfood from "../../assets/restauranfood.jpg";
import styles from "./Hero.module.css";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={styles.herroButton}>
          <Button buttonTitle="Reserve a table" ariaLabel="Reserve Table" />
        </div>
      </div>
      <div className={styles.heroImageContainer}>
        <img
          src={restauranfood}
          alt="restauranfood"
          aria-label="Image of food at Little Lemon restaurant"
        />
      </div>
    </div>
  );
};

export default Hero;
