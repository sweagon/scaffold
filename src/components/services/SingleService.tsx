import { Link, useParams } from "react-router-dom";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import Button from "../../utils/Button";
import { GoPlus } from "react-icons/go";
import { FaCircleCheck } from "react-icons/fa6";
import Team from "../about/Team";
import Achivements from "../about/Achivements";
import { useTranslation } from "react-i18next";

const data = [
  {
    id: 1,
    key: "development",
    buttonText: "development_button",
    imageUrl: "/card.png",
  },
  {
    id: 2,
    key: "sea",
    buttonText: "ecommerce_solutions_button",
    imageUrl: "/card.png",
  },
  {
    id: 3,
    key: "seo",
    buttonText: "seo_optimization_button",
    imageUrl: "/card.png",
  },
  {
    id: 4,
    key: "branding",
    buttonText: "mobile_app_development_button",
    imageUrl: "/card.png",
  },
  {
    id: 5,
    key: "cloud_integration",
    buttonText: "cloud_integration_button",
    imageUrl: "/card.png",
  },
];

const SingleServicve = () => {
  const { read } = useParams<{ read: string }>(); // Retrieves service title from URL params

  const { t } = useTranslation(read);

  const approachSteps = t("our_approach_steps", { returnObjects: true });
  const expertiseList = t(`${read}_expertise_list`, {
    returnObjects: true,
  }) as string[];
  const listItems = t("list", {
    returnObjects: true,
    defaultValue: [],
  }) as Array<{
    title: string;
    description: string;
  }>;

  // If service is not found, show a 404-like message
  if (!t) {
    return (
      <Section
        id="read"
        ariaLabel="Read services"
        className=" md:!pt-48 !pt-32"
      >
        <Heading level={1}>Service Not Found</Heading>
        <p>The service you're looking for doesn't exist or has been moved.</p>
      </Section>
    );
  }

  return (
    <>
      <Section
        id="Services"
        ariaLabel="Services"
        className="md:!pt-48 !pt-32 md:space-y-24 sm:space-y-16 space-y-8"
      >
        <div className="grid md:grid-cols-2 md:gap-16 gap-4">
          <Heading level={1}>{t(`${read}_title`)}</Heading>
          <div className="space-y-8">
            <p>{t(`${read}_intro`)}</p>
            <Link to="/services/1" className="flex items-center">
              <Button>Contact Us</Button>
              <button className="aspect-square p-2 rounded-full border-2 bg-white text-black border-black text-3xl flex justify-center items-center">
                <GoPlus />
              </button>
            </Link>
          </div>
        </div>
      </Section>
      <Section
        id="what-is-seo"
        ariaLabel="What is SEO"
        className="bg-black text-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 lg:px-16 space-y-8 flex flex-col justify-center items-center text-center"
      >
        <Heading level={2}>{t(`what_is_${read}_title`)}</Heading>
        <p className="max-w-screen-md">{t(`what_is_${read}_description`)}</p>
      </Section>
      <Section
        id="our-approach"
        ariaLabel="Our approach to SEO"
        className="bg-[#EFEFEF]"
      >
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4 h-full">
          {Object.entries(approachSteps).map(
            ([stepKey, stepDescription], index) => (
              <div
                key={stepKey}
                className="rounded-xl bg-white p-8 flex flex-col gap-16"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
                  {String(index + 1).padStart(2, "0")}{" "}
                  {/* Display step number (01, 02, etc.) */}
                </div>
                <div className="space-y-4">
                  <p>{stepDescription}</p>
                </div>
              </div>
            )
          )}
        </div>
      </Section>
      {/* LOOP THROUGH THE LIST ARRAY */}
      {listItems.map((item, index) => (
        <Section key={index} className="space-y-4">
          <div
            className={`grid sm:grid-cols-2 gap-4 ${
              index % 2 === 0 ? "group-even" : "group-odd"
            }`}
          >
            <div
              className={`flex flex-col items-start gap-4 ${
                index % 2 === 0 ? "sm:order-2" : "sm:order-1"
              }`}
            >
              <span className="py-1 px-2 rounded-full border border-black text-xs">
                {t(`${read}_title`)} {/* Dynamic title based on the service */}
              </span>
              <Heading level={3}>{item.title}</Heading>
              {/* Dynamic title */}
              <p className="lg:text-lg">{item.description}</p>
              {/* Dynamic description */}
            </div>
            <div
              className={`aspect-square bg-cover bg-center rounded-xl ${
                index % 2 === 0 ? "sm:order-1" : "sm:order-2"
              }`}
              style={{ backgroundImage: `url(/card.png)` }}
            ></div>
          </div>
        </Section>
      ))}
      <Section
        id="seo-expertise"
        ariaLabel="SEO expertise"
        className="bg-black text-white px-4 py-12 sm:px-8 sm:py-16 md:px-12 md:py-24 lg:px-16 md:space-y-24 sm:space-y-16 space-y-8"
      >
        <div className="grid md:grid-cols-2 md:gap-16 gap-4">
          <Heading level={2}>{t(`${read}_expertise_title`)}</Heading>
          <p className="max-w-screen-md">{}</p>
        </div>
        <ul className="max-w-screen-lg mx-auto flex justify-between flex-wrap gap-y-4 md:gap-x-24 gap-8 md:text-2xl sm:text-lg text-sm">
          {expertiseList.map((item, index) => (
            <li key={index} className="flex items-center gap-4 font-semibold">
              <FaCircleCheck className="text-3xl" />
              {item}
            </li>
          ))}
        </ul>
      </Section>
      <Team />
      <Achivements />
    </>
  );
};

export default SingleServicve;
