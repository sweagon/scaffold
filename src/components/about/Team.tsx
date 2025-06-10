import { GoPlus } from "react-icons/go";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Team = () => {
  return (
    <Section
      id="hero"
      ariaLabel="Introduction section"
      className="md:space-y-24 sm:space-y-16 space-y-8 flex flex-col"
    >
      <Heading level={2}>Our Expert Team</Heading>
      <div className="grid md:grid-cols-7 grid-cols-3 grid-rows-5 md:gap-4 gap-2 h-full">
        <div className="bg-[url('/grid(1).png')] bg-cover bg-center md:row-span-5 row-span-2 md:col-span-2 rounded-xl aspect-[1/2]"></div>
        <div className="bg-[url('/grid(2).png')] md:row-span-3 md:col-span-3 col-span-2 rounded-xl"></div>
        <div className="bg-[url('/grid(4).png')] md:row-span-2 md:col-span-2 col-span-2 rounded-xl"></div>
        <div className="bg-[url('/grid(5).png')] md:row-span-3 md:col-span-2 col-span-3 rounded-xl"></div>
        <div className="bg-[url('/grid(3).png')] row-span-2 col-span-3 rounded-xl"></div>
      </div>
    </Section>
  );
};

export default Team;
