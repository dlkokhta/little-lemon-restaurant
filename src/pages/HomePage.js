import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import styles from "./Homepage.module.css";

const HomePage = () => {
  return (
    <>
      <Hero />
      <section id="menu">
        <Highlights />
      </section>
      <Testimonials />
      <section id="about">
        <About />
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
