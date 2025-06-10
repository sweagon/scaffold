import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Hero = () => {
  return (
    <Section
      as="header"
      id="hero"
      ariaLabel="Introduction section"
      className=" md:!pt-48 !pt-32 !pb-0"
    >
      <div className="grid md:grid-cols-2 md:gap-16 gap-4">
        <Heading level={1}>
          Inspiring
          <br />
          <span className="text-[#9C9C9C]"> BLOG</span>
        </Heading>
        <p>
          We shape tomorrow's brands with boldness, vision, and collaborative
          spirit. Welcome to our agency, where innovation thrives. We are
          dedicated to guiding you through every step of your journey towards
          achieving your goals. Let's dive into this exciting opportunity
          together and make a lasting impression.
        </p>
      </div>
    </Section>
  );
};

export default Hero;
