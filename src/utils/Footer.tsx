import Heading from "./Heading";
import Section from "./Section";

const Footer = () => {
  return (
    <footer
      id="#contact"
      aria-label="Footer"
      className="px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 lg:px-16 space-y-16"
    >
      <div className="grid md:grid-cols-2 gap-16">
        <div className="flex gap-32">
          <ul className="space-y-4">
            <li className="font-light">Auckland</li>
            <li className="font-medium">
              <a href="tel:021909231">021909231</a>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <ul className="space-y-4">
          <li>Get in touch</li>
          <li className="md:text-[calc(2rem+1vw)] text-2xl leading-none">
            <a href="mailto:eagleeyesbuilt@gmail.com">
              eagleeyesbuilt@gmail.com
            </a>
          </li>
          <li className="md:text-[calc(2rem+1vw)] text-2xl leading-none">
            <a href="https://wa.me/021909231?text=Hi,%20Alban!" target="_blank">
              021909231
            </a>
          </li>
        </ul>
      </div>
      <p className="text-[calc(4rem+4vw)] font-medium leading-none">
        Eagle Eyes Built
      </p>
    </footer>
  );
};

export default Footer;
