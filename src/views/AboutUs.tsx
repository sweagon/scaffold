import Hero from "../components/about/Hero";
import About from "../components/home/About";
import Team from "../components/about/Team";
import Industries from "../components/about/Industries";
import Testimonial from "../components/home/Testimonial";
import Achivements from "../components/about/Achivements";
import Processes from "../components/about/Processes";

const AboutUs = () => {
  return (
    <>
      <Hero />
      <About />
      <Team />
      <Processes />
      <Industries />
      <Testimonial />
      <Achivements />
    </>
  );
};

export default AboutUs;
