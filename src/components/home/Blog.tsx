import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Blog = () => {
  return (
    <Section
      id="hero"
      ariaLabel="Introduction section"
      className="md:space-y-24 sm:space-y-16 space-y-8"
    >
      <div className="grid md:grid-cols-2 md:gap-16 gap-4">
        <Heading level={2}>
          Inspiring
          <br />
          <span className="text-[#9C9C9C]"> BLOG</span>
        </Heading>
        <div className="flex flex-col md:gap-16 gap-8">
          <p>
            We shape tomorrow's brands with boldness, vision, and collaborative
            spirit. Welcome to our agency, where innovation thrives. We are
            dedicated to guiding you through every step of your journey towards
            achieving your goals. Let's dive into this exciting opportunity
            together and make a lasting impression.
          </p>
          <div className="flex items-center">
            <Button>Read Our Blog</Button>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
        <div className="md:aspect-[2/3] aspect-square p-4 flex items-end bg-black bg-cover bg-no-repeat rounded-xl">
          {/* <div className="p-4 bg-[#9C9C9C] rounded-xl">
            <span>Marketing / SEO</span>
            <Heading level={4}>
              How to Check Website Traffic for Your Business
            </Heading>
          </div> */}
        </div>
        <div className="md:aspect-[2/3] aspect-square p-4 flex items-end bg-black bg-cover bg-no-repeat rounded-xl"></div>
        <div className="md:aspect-[2/3] aspect-square p-4 flex items-end bg-black bg-cover bg-no-repeat rounded-xl"></div>
      </div>
    </Section>
  );
};

export default Blog;
