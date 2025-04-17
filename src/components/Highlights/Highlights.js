import styles from "./Highlights.module.css";
import Button from "../Button/Button";
import HighlightsDetails from "../HighlightsDetails/HighlightsDetails";
import GreekSalad from "../../assets/greekSalad.jpg";
import Bruchetta from "../../assets/bruchetta.svg";

const Highlights = () => {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.highlightsContainerHeader}>
        <h1>Specials!</h1>
        <Button buttonTitle="Online Menu" aria-label="Go to online menu" />
      </div>
      <div className={styles.highlightsCards} aria-labelledby="specials-header">
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails
            foodImage={GreekSalad}
            foodName="Greek salad"
            aria-labelledby="food-item-1"
            aria-describedby="food-description-1"
          />
        </div>
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails
            foodImage={Bruchetta}
            foodName="Brushetta"
            aria-labelledby="food-item-2"
            aria-describedby="food-description-2"
          />
        </div>
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails
            foodImage={GreekSalad}
            foodName="Lemon Dessert"
            aria-labelledby="food-item-3"
            aria-describedby="food-description-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
