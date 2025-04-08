import Person from "../../assets/person.png";
import styles from "./TestimonialsDetails.module.css";

const TestimonialsDetails = () => {
  return (
    <div className={styles.TestimonialsDetailsContainer}>
      <div className={styles.TestimonialsDetailsContainer2}>
        <img src={Person} />
        <h2>Antonio sanches</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
    </div>
  );
};

export default TestimonialsDetails;
