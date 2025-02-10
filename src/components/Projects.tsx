import React, { useState } from "react";
import Section from "../utils/Section";
import Heading from "../utils/Heading";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";

// Define a type for project data
type Project = {
  year: string;
  title: string;
  mainImage: string;
  gallery: string[];
};

// Dynamic project data
const projects: Project[] = [
  {
    year: "2024",
    title: "Modern Bathrooms",
    mainImage: "/gallery/modern-bathrooms.webp",
    gallery: [
      "/gallery/bathrooms/1.webp",
      "/gallery/bathrooms/2.webp",
      "/gallery/bathrooms/3.webp",
      "/gallery/bathrooms/4.webp",
      "/gallery/bathrooms/5.jpeg",
      "/gallery/bathrooms/6.jpeg",
      "/gallery/bathrooms/7.jpeg",
      "/gallery/bathrooms/8.jpeg",
      "/gallery/bathrooms/9.jpeg",
    ],
  },
  {
    year: "2024",
    title: "Facade waterproofing",
    mainImage: "/gallery/facade-waterproofing.webp",
    gallery: [
      "/gallery/facade-waterproofing/1.webp",
      "/gallery/facade-waterproofing/2.webp",
      "/gallery/facade-waterproofing/3.webp",
      "/gallery/facade-waterproofing/4.webp",
      "/gallery/facade-waterproofing/5.webp",
      "/gallery/facade-waterproofing/6.jpg",
      "/gallery/facade-waterproofing/7.jpg",
      "/gallery/facade-waterproofing/8.jpg",
    ],
  },
  { year: "", title: "", mainImage: "", gallery: [] },
  { year: "", title: "", mainImage: "", gallery: [] },
  {
    year: "2024",
    title: "Tiles",
    mainImage: "/gallery/tiles.jpeg",
    gallery: [
      "/gallery/roof-waterproofing/1.jpeg",
      "/gallery/roof-waterproofing/2.jpeg",
      "/gallery/roof-waterproofing/3.jpeg",
    ],
  },
  {
    year: "2024",
    title: "Roof waterproofing",
    mainImage: "/gallery/roof-waterproofing.jpeg",
    gallery: [
      "/gallery/tiles/1.jpeg",
      "/gallery/tiles/2.jpeg",
      "/gallery/tiles/3.jpeg",
      "/gallery/tiles/4.jpeg",
    ],
  },
];

const Projects = () => {
  const [selectedGallery, setSelectedGallery] = useState<string[] | null>(null);
  const [open, setOpen] = useState(false); // To handle Lightbox opening

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05 },
  };

  return (
    <Section id="portfolio" ariaLabel="Projects" className="space-y-16">
      <div className="grid md:grid-cols-2 md:gap-24 gap-8 items-end">
        <div className="space-y-8">
          <Heading level={2}>
            Our
            <br />
            Projects
          </Heading>
          <div className="border-b w-[calc(100%-2rem)] relative lg:order-1 order-2">
            <div className="h-8 flex justify-center items-center aspect-square border rounded-full absolute -bottom-4 -right-8 text-xl">
              <IoIosArrowRoundForward />
            </div>
          </div>
        </div>
        <p className="md:font-light lg:-mb-4">
          Discover our diverse portfolio at Eagle Eyes Built, showcasing
          exceptional craftsmanship in residential renovations, commercial
          constructions, roofing, waterproofing, and tiling.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:gap-4 gap-8">
        <div className="space-y-2 flex flex-col">
          <img
            src="/gallery/projects-banner.jpeg"
            alt="Banner"
            className="aspect-video object-cover"
          />
          <p className="text-white">2024</p>
          <p className="text-white">Discover our diverse portfolio</p>
          <p>
            For more astonishing projects visit our profile at{" "}
            <a
              href="https://builderscrack.co.nz/tradies/3x09b38c/eagle-eyes-built"
              target="_blank"
              className="text-white underline"
            >
              builderscrack.com
            </a>
          </p>
        </div>
        <motion.div
          className="grid sm:grid-cols-3 grid-cols-2 gap-4"
          id="project-list"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`space-y-2 cursor-pointer ${
                index === 2 || index === 3 ? "md:block hidden" : ""
              }`}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => {
                setSelectedGallery(project.gallery);
                setOpen(true); // Open the Lightbox on click
              }}
            >
              <img
                src={project.mainImage}
                className="aspect-[5/4] object-cover transition"
                alt={project.title}
              />
              <p className="text-white">{project.year}</p>
              <p>{project.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedGallery && open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={selectedGallery.map((src) => ({ src }))}
        />
      )}
    </Section>
  );
};

export default Projects;
