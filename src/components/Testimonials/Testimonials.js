import styles from "./Testimonials.module.css";
import TestimonialsDetailsDetails from "../TestimonialsDetails/TestimonialsDetails";

const Testimonials = () => {
  return (
    <div
      className={styles.testimonialsContainer}
      aria-labelledby="testimonials-heading"
    >
      <h1>Testimonials</h1>
      <div className={styles.testimonialsContainer2}>
        <div>
          <TestimonialsDetailsDetails />
        </div>
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
    </div>
  );
};

export default Testimonials;
