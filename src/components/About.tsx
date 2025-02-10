import React from "react";
import Section from "../utils/Section";
import Heading from "../utils/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const iconHover = {
    hover: {
      rotate: 90,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <>
      <Section
        id="we-use"
        ariaLabel="We Use"
        className="space-y-16 text-center"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="md:space-y-16 space-y-8"
        >
          <Heading level={2}>We Use</Heading>
          <motion.div
            className="flex flex-wrap justify-center items-end md:gap-24 gap-16"
            variants={staggerContainer}
          >
            {["equus", "sika", "mapei", "riverdil"].map((logo, index) => (
              <motion.img
                key={index}
                src={`/logos/${logo}.png`}
                alt={`${logo} logo`}
                className="w-32 grayscale hover:grayscale-0 transition"
                variants={fadeIn}
              />
            ))}
          </motion.div>
        </motion.div>
      </Section>

      <Section id="about" ariaLabel="About" className="space-y-16">
        <motion.div
          className="lg:grid grid-cols-3 flex flex-col lg:gap-24 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <div className="border-b w-[calc(100%-2rem)] relative lg:order-1 order-2">
            <div className="h-8 flex justify-center items-center aspect-square border rounded-full absolute -bottom-4 -right-8 text-xl">
              <IoIosArrowRoundForward />
            </div>
          </div>
          <motion.div
            className="col-span-2 space-y-8 lg:order-2 order-1"
            variants={fadeIn}
          >
            <Heading level={2}>About Us</Heading>
            <motion.p className="md:text-xl md:font-light" variants={fadeIn}>
              We are experts in leak detection and repair, specializing in
              finding and fixing leaks anywhere in your home, no matter how
              hidden or complex. From bathroom shower leaks and mould removal to
              roof leaks and balcony waterproofing, our skilled team ensures a
              thorough diagnosis and lasting repairs.
            </motion.p>
            <motion.p className="md:text-xl md:font-light" variants={fadeIn}>
              In addition to leak solutions, we offer full bathroom renovations,
              transforming your space while addressing any underlying issues
              like waterproofing and mould prevention. With extensive experience
              in roofing, waterproofing, and tiling, we provide comprehensive
              solutions to keep your home protected from water damage. Whether
              it's a leaky basement, façade, or flat roof, we handle it all with
              precision and expertise, ensuring your home stays dry, secure, and
              beautifully renovated.
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.img
          src="/banners/about.jpg"
          alt="A well-renovated waterproofed home"
          className="sm:aspect-[3/1] aspect-[4/3] object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        />
      </Section>
    </>
  );
};

export default About;
