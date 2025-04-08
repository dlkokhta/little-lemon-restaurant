import styles from "./Testimonials.module.css";
import TestimonialsDetailsDetails from "../TestimonialsDetails/TestimonialsDetails";

const Testimonials = () => {
  return (
    <div className={styles.TestimonialsDetailsContainer}>
      <h1>Testimonials</h1>
      <div>
        <TestimonialsDetailsDetails />
      </div>
      <div>
        <TestimonialsDetailsDetails />
      </div>
      <div>
        <TestimonialsDetailsDetails />
      </div>
    </div>
  );
};

export default Testimonials;
