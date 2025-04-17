import styles from "./HighlightsDetails.module.css";

const HighlightsDetails = ({ foodName, foodImage }) => {
  return (
    <div
      className={styles.HighlightsDetailsContainer}
      role="region"
      aria-labelledby="highlight-details-heading"
    >
      <img
        src={foodImage}
        alt="GreekSalad"
        aria-describedby="food-description"
      />

      <div className={styles.HighlightsDetailsContainer2}>
        <div className={styles.HighlightsDetailsContainerPrice}>
          <h3>{foodName}</h3>
          <h4>$12.99</h4>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers, olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
        <h5 role="button" aria-label={`Order delivery for GreekSalad`}>
          Order a delivery
        </h5>
      </div>
    </div>
  );
};

export default HighlightsDetails;
