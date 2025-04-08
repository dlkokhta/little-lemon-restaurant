import styles from "./Highlights.module.css";
import Button from "../Button/Button";
import HighlightsDetails from "../HighlightsDetails/HighlightsDetails";

const Highlights = () => {
  return (
    <div className={styles.highlightsContainer}>
      <div className={styles.highlightsContainerHeader}>
        <h1>Specials!</h1>
        <Button />
      </div>
      <div className={styles.highlightsContainerCards}>
        <HighlightsDetails />
      </div>
      <div className={styles.highlightsContainerCards}>
        <HighlightsDetails />
      </div>
      <div className={styles.highlightsContainerCards}>
        <HighlightsDetails />
      </div>
    </div>
  );
};

export default Highlights;
