import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      {/* <Header /> */}
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
