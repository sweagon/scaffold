import { GoPlus } from "react-icons/go";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const techStackItems = [
  { src: "/Logo.png", alt: "Figma logo", name: "Figma" },
  { src: "/Logo-1.png", alt: "Logo 1", name: "Tech 1" },
  { src: "/Logo-2.png", alt: "Logo 2", name: "Tech 2" },
  { src: "/Logo-3.png", alt: "Logo 3", name: "Tech 3" },
  { src: "/Logo-4.png", alt: "Logo 4", name: "Tech 4" },
  { src: "/Logo-5.png", alt: "Logo 5", name: "Tech 5" },
  { src: "/Logo-6.png", alt: "Logo 6", name: "Tech 6" },
  { src: "/Logo-7.png", alt: "Logo 7", name: "Tech 7" },

  // Add more items here as needed
];

const Industries = () => {
  return (
    <Section
      id="tech-stack"
      ariaLabel="Our Tech Industries"
      className="bg-black text-white md:space-y-24 sm:space-y-16 space-y-8"
    >
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 md:gap-16 gap-4">
        <Heading level={2}>
          Industries we <br /> work with
        </Heading>
        <p>
          We shape tomorrow's brands with boldness, vision, and collaborative
          spirit. Welcome to our agency, where innovation thrives. We are
          dedicated to guiding you through every step of your journey towards
          achieving your goals. Let’s dive into this exciting opportunity
          together and make a lasting impression.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
        {techStackItems.map(({ src, alt, name }, index) => (
          <div
            key={index}
            className="aspect-square rounded-xl flex flex-col justify-center items-center gap-8 bg-[#2C2C2C]"
            aria-label={name}
          >
            {/* <div className="w-24 aspect-square">
              <img src={src} alt={alt} className="object-contain" />
            </div> */}
            <span>{name}</span>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Industries;
