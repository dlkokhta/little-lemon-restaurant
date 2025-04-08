import styles from "./HighlightsDetails.module.css";
import GreekSalad from "../../assets/greekSalad.jpg";

const HighlightsDetails = () => {
  return (
    <div className={styles.HighlightsDetailsContainer}>
      <img src={GreekSalad} />

      <div className={styles.HighlightsDetailsContainer2}>
        <div className={styles.HighlightsDetailsContainerPrice}>
          <h3>Greek Salad</h3>
          <h4>$12.99</h4>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <h5>Order a delivery</h5>
      </div>
    </div>
  );
};

export default HighlightsDetails;
