import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "../utils/Section";
import Navbar from "../utils/Navbar";
import Heading from "../utils/Heading";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const backgrounds = [
  "/banners/banner-1.jpeg",
  "/banners/banner-2.jpeg",
  "/banners/banner-3.jpeg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? backgrounds.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="h-screen relative overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          style={{
            backgroundImage: `url('${backgrounds[currentIndex]}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="absolute inset-0 bg-black/50 bg-blend-multiply"
          aria-hidden="true"
        ></motion.div>
      </AnimatePresence>

      <Section
        id="hero-section"
        as="header"
        aria-label="Hero Section"
        className="relative h-full flex flex-col justify-between !p-0"
      >
        <Navbar />
        <div className="md:h-fit h-full flex md:flex-row flex-col justify-between gap-8 md:items-end p-6 sm:p-8 md:px-12 lg:px-16 z-10 relative">
          {/* Left Content */}
          <motion.div
            className="h-full flex flex-col justify-between gap-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
          >
            <div className="flex flex-col justify-center gap-8">
              <p className="text-2xl">All about leaks</p>
              <Heading level={1} className="max-w-xl">
                Bathrooms Roofs & Waterproofing
              </Heading>
              <p>
                We specialize in leak repairs, bathroom, roofing/waterproofing,
                and tiles.
              </p>
            </div>
            <div className="flex justify-between items-center">
              <a
                href="/"
                className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm hover:bg-opacity-10 transition flex justify-center items-center gap-2 md:w-fit w-full text-black py-2 px-4 rounded-full"
              >
                Find us at
                <img
                  src="/builderscrack.png"
                  className="h-4"
                  alt="Builders Crack website logo"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="md:max-w-md w-full text-center text-sm leading-tight md:space-y-8 space-y-4 md:px-0 px-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
          >
            {/* Progress Bar */}
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrev}
                className="h-8 flex justify-center items-center bg-white/10 hover:bg-white/50 hover:scale-110 transition aspect-square border border-white rounded-full text-xl"
                aria-label="Previous Slide"
              >
                <IoIosArrowRoundBack />
              </button>
              <div className="flex-1 h-0.5 bg-white/25 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: "0%" }}
                  animate={{
                    width: `${
                      ((currentIndex + 1) / backgrounds.length) * 100
                    }%`,
                  }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                ></motion.div>
              </div>
              <button
                onClick={handleNext}
                className="h-8 flex justify-center items-center bg-white/10 hover:bg-white/50 hover:scale-110 transition aspect-square border border-white rounded-full text-xl"
                aria-label="Next Slide"
              >
                <IoIosArrowRoundForward />
              </button>
            </div>
            <p>
              With a reputation for reliability and expertise, our trusted team
              ensures timely solutions for all your home's water damage issues
              while transforming your space with quality renovations.
            </p>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Hero;
