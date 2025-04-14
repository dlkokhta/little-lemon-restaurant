import styles from "./Button.module.css";

const Button = ({ buttonTitle, ariaLabel }) => {
  return (
    <button className={styles.buttonContainer} aria-label={ariaLabel}>
      {buttonTitle}
    </button>
  );
};

export default Button;
