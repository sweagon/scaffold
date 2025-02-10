import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";
import Footer from "../utils/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
