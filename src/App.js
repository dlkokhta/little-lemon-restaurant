import "./App.css";
import Header from "./components/Header/Header";
// import Footer from './components/Footer/Footer';
import Hero from "./components/Hero/Hero";
import Highlights from "./components/Highlights/Highlights";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
      {/* <Footer /> */}
    </>
  );
}

export default App;
