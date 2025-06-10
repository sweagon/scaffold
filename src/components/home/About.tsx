import { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation("home");

  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const listData = [
    {
      title: t("commitment_title"),
      content: t("commitment_description"),
      imgSrc: "/img.png",
      imgAlt: "Quality commitment image",
    },
    {
      title: t("rapid_dev_title"),
      content: t("rapid_dev_description"),
      imgSrc: "/img-1.png",
      imgAlt: "Speedy development image",
    },
    {
      title: t("solutions_title"),
      content: t("solutions_description"),
      imgSrc: "/img-2.png",
      imgAlt: "Innovative solutions image",
    },
    {
      title: t("customer_satisfaction_title"),
      content: t("customer_satisfaction_description"),
      imgSrc: "/img-3.png",
      imgAlt: "Customer satisfaction image",
    },
  ];

  return (
    <Section
      id="about"
      aria-label="About our agency"
      className="md:space-y-24 sm:space-y-16 space-y-8 !pt-0"
    >
      {/* Main Section */}
      <div className="flex flex-col md:gap-16 gap-8">
        <div className="grid md:grid-cols-2 md:gap-16 gap-8 items-center">
          <Heading level={2} className="max-w-xl">
            {t("certified_by")}
          </Heading>
          <div className="grid grid-cols-2 gap-16">
            <img
              src="/meta-partner.png"
              alt="Meta Business Partner"
              className="h-full object-contain"
              loading="lazy"
            />
            <img
              src="/google-analytics.png"
              alt="Google Analytics Partner"
              className="h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
        <div className="md:grid flex flex-col grid-cols-2 md:gap-16 gap-4 items-center">
          <Heading level={2} className="max-w-xl">
            {t("vision_title")}
          </Heading>
          <div className="flex flex-col md:gap-16 gap-4">
            <p>{t("vision_description")}</p>
            <div className="flex items-center">
              <Button
                aria-label="Learn more about us"
                variant="primary"
                size="medium"
              >
                <Link to="/about">{t("about_title")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* List Section */}
      <ul className="max-w-screen-xl mx-auto">
        {listData.map((item, index) => (
          <li
            key={index}
            className="border-b border-black flex flex-col gap-8 py-4"
          >
            <div className="flex md:flex-row flex-col md:items-center items-start gap-8">
              <div className="md:h-32 h-24 aspect-square">
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={`object-contain object-center transition-all duration-300 ease-in-out ${
                    expandedItem === index ? "scale-110" : "scale-100"
                  }`}
                  loading="lazy"
                />
              </div>
              <div className="w-full">
                <div className="flex justify-between gap-8">
                  <Heading level={3}>{item.title}</Heading>
                  <button
                    onClick={() => toggleItem(index)}
                    className={`md:hidden block p-2 text-3xl rounded-full border-2 border-black flex-shrink-0 transition ${
                      expandedItem === index ? "bg-black text-white" : ""
                    }`}
                    aria-expanded={expandedItem === index ? "true" : "false"}
                    aria-label={`Toggle details for ${item.title}`}
                  >
                    {expandedItem === index ? <IoCloseOutline /> : <GoPlus />}
                  </button>
                </div>
                {/* Toggleable Content */}
                <div
                  className={`transition-all duration-700 ease-in-out overflow-hidden ${
                    expandedItem === index ? "max-h-screen" : "max-h-0"
                  }`}
                >
                  <p className="mt-4">{item.content}</p>
                </div>
              </div>
              <button
                onClick={() => toggleItem(index)}
                className={`md:block hidden p-2 text-3xl rounded-full border-2 border-black flex-shrink-0 transition ${
                  expandedItem === index ? "bg-black text-white" : ""
                }`}
                aria-expanded={expandedItem === index ? "true" : "false"}
                aria-label={`Toggle details for ${item.title}`}
              >
                {expandedItem === index ? <IoCloseOutline /> : <GoPlus />}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default About;
