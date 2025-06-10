import Stack from "../components/home/Stack";
import About from "../components/home/About";
import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Stack />
      <Blog />
    </>
  );
};

export default Home;
