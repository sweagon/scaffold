import React, { useState } from "react";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { GoPlus } from "react-icons/go";
import { IoCloseOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation("services");
  const [expandedItem, setExpandedItem] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const faqKeys = [
    "project_duration",
    "cost",
    "support",
    "communication",
    "changes",
  ];

  return (
    <Section
      id="faq"
      ariaLabel="Frequently Asked Questions section"
      className="md:space-y-0 space-y-8"
    >
      <Heading level={2}>
        {t("faq.title")} <br />
      </Heading>
      <ul className="md:max-w-[50%] ml-auto space-y-4">
        {faqKeys.map((key, index) => (
          <li
            key={index}
            className="bg-[#EFEFEF] p-4 pl-6 rounded-lg"
            aria-labelledby={`faq-question-${index}`}
          >
            <div className="flex justify-between items-center">
              <p
                className="md:text-xl font-semibold"
                id={`faq-question-${index}`}
              >
                {t(`faq.${key}.question`)}
              </p>
              <button
                onClick={() => toggleItem(index)}
                className={`p-2 text-3xl rounded-full border-2 border-black flex-shrink-0 transition ${
                  expandedItem === index ? "bg-black text-white" : ""
                }`}
                aria-label={
                  expandedItem === index
                    ? `Collapse details for ${t(`faq.${key}.question`)}`
                    : `Expand details for ${t(`faq.${key}.question`)}`
                }
              >
                {expandedItem === index ? <IoCloseOutline /> : <GoPlus />}
              </button>
            </div>
            <div
              className={`transition-all duration-300 overflow-hidden ${
                expandedItem === index ? "max-h-screen mt-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-700">{t(`faq.${key}.answer`)}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Faq;
