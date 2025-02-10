import Section from "../utils/Section";
import Heading from "../utils/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuDot } from "react-icons/lu";
import Button from "../utils/Button";
import { motion } from "framer-motion";

const servicesData = [
  {
    title: "Bathrooms",
    items: [
      "Renovation",
      "Remodel",
      "Shower leaks",
      "Mould removal",
      "Waterproofing",
    ],
    imgSrc: "/services/bathrooms.jpeg",
  },
  {
    title: "Roofing",
    items: [
      "Leak detection",
      "Roof maintenance",
      "Re-roofing",
      "Roof painting",
      "Liquid membrane application",
    ],
    imgSrc: "/services/roofing.jpg",
  },
  {
    title: "Waterproofing",
    items: [
      "Waterproofing maintenance",
      "Waterproofing membrane",
      "Waterproofing leaky balconies",
      "Leaky basement repairs",
      "Tanking",
      "Façade waterproofing",
      "Flat roof waterproofing",
    ],
    imgSrc: "/services/waterproofing.jpeg",
  },
  {
    title: "Tiling",
    items: [
      "Commercial tiling",
      "Residential tiling",
      "Tile repairs",
      "Pool tiling",
      "Mosaic tiles",
    ],
    imgSrc: "/services/tiling.jpeg",
  },
  {
    title: ["Microcement", "Venetian Plastering"],
    items: [
      "Precision microcement",
      "Venetian plaster finishes",
      "Luxury wall treatments",
    ],
    imgSrc: "/services/microplacement.jpeg",
  },
];

const Services = () => {
  return (
    <Section id="services" ariaLabel="Our Services" className="space-y-16">
      <div className="lg:grid grid-cols-3 flex flex-col lg:gap-24 gap-8">
        <div className="border-b w-[calc(100%-2rem)] relative lg:order-1 order-2">
          <div className="h-8 flex justify-center items-center aspect-square border rounded-full absolute -bottom-4 -right-8 text-xl">
            <IoIosArrowRoundForward />
          </div>
        </div>
        <div className="col-span-2 space-y-8 lg:order-2 order-1">
          <Heading level={2}>
            Our
            <br />
            Services
          </Heading>
          <p className="md:text-xl md:font-light">
            At Eagle Eyes Built, we excel in identifying and resolving leaks
            throughout your home, ensuring lasting protection against water
            damage. Our experienced team specializes in comprehensive leak
            detection, repairs, and renovations, focusing on roofs, bathrooms,
            leaky basements, and facades to deliver tailored solutions that keep
            your home safe, dry, and beautifully maintained.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 gap-4">
        {servicesData.map((service, index) => (
          <motion.div
            key={index}
            className={`flex relative border-y overflow-hidden group ${
              [1, 2, 5, 6, 9].includes(index) ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <motion.div
              className="xl:bg-black xl:h-full h-fit bg-black/75 w-full p-8 flex flex-col justify-between gap-8 xl:relative absolute bottom-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                {Array.isArray(service.title) ? (
                  service.title.map((title, index) => (
                    <Heading
                      key={index}
                      level={3}
                      className="flex items-center gap-2 last-of-type:mb-4 -ml-2 text-white"
                    >
                      <LuDot /> {title}
                    </Heading>
                  ))
                ) : (
                  <Heading
                    level={3}
                    className="flex items-center gap-2 mb-4 -ml-2 text-white"
                  >
                    <LuDot /> {service.title}
                  </Heading>
                )}
                <ul className="text-sm space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      - {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Button size="medium">
                <a
                  href="https://wa.me/021909231?text=Hi,%20Alban!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact us
                </a>
              </Button>
            </motion.div>

            {/* Image Section */}
            <img
              src={service.imgSrc}
              alt="service image"
              className="xl:w-[50%] aspect-square object-cover py-4"
            />
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
