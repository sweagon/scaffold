import React from "react";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Achivements = () => {
  return (
    <Section
      id="hero"
      ariaLabel="Introduction section"
      className="md:space-y-0 space-y-8"
    >
      <Heading level={2}>
        What we already <br /> <span className="text-[#9C9C9C]">achieved</span>
      </Heading>
      <ul className="max-w-[50%] ml-auto space-y-8">
        <li>
          <Heading level={2} className="font-light md:text-[80px]">
            $400K+
          </Heading>
          <span>Revenue Generated</span>
        </li>
        <li>
          <Heading level={2} className="font-light md:text-[80px]">
            150+
          </Heading>
          <span>Projects Completed</span>
        </li>
        <li>
          <Heading level={2} className="font-light md:text-[80px]">
            740%
          </Heading>
          <span>Average ROAs</span>
        </li>
      </ul>
    </Section>
  );
};

export default Achivements;
