import Person from "../../assets/person.png";
import styles from "./TestimonialsDetails.module.css";
import star from "../../assets/star.png";

const TestimonialsDetails = () => {
  return (
    <div className={styles.TestimonialsDetailsContainer}>
      <div className={styles.TestimonialsDetailsContainer2}>
        <img src={Person} alt="person" />
        <h2>Antonio sanches</h2>
      </div>
      <div className={styles.TestimonialsDetailsStarsContainer}>
        <div className={styles.TestimonialsDetailsStar}>
          <img src={star} alt="star" />
        </div>
        <div className={styles.TestimonialsDetailsStar}>
          <img src={star} alt="start" />
        </div>
        <div className={styles.TestimonialsDetailsStar}>
          <img src={star} alt="star" />
        </div>
        <div className={styles.TestimonialsDetailsStar}>
          <img src={star} alt="star" />
        </div>
        <div className={styles.TestimonialsDetailsStar}>
          <img src={star} alt="star" />
        </div>
      </div>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua"
      </p>
    </div>
  );
};

export default TestimonialsDetails;
