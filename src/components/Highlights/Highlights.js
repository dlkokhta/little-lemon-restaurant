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
        <Button buttonTitle="Online Menu" />
      </div>
      <div className={styles.highlightsCards}>
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails foodImage={GreekSalad} foodName="Greek salad" />
        </div>
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails foodImage={Bruchetta} foodName="Brushetta" />
        </div>
        <div className={styles.highlightsContainerCards}>
          <HighlightsDetails foodImage={GreekSalad} foodName="Lemon Dessert" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
