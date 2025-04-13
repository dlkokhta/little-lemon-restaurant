import styles from "./Button.module.css";

const Button = ({ buttonTitle }) => {
  return <button className={styles.buttonContainer}>{buttonTitle}</button>;
};

export default Button;
