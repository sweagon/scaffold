import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import Button from "../../utils/Button";
import { GoPlus } from "react-icons/go";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const List = () => {
  const { t } = useTranslation("services");

  const services = [
    {
      key: "seo",
      link: "/services/seo",
      imageUrl: "/new4.jpeg",
    },
    {
      key: "branding",
      link: "/services/branding",
      imageUrl: "/new7.jpeg",
    },
    {
      key: "sea",
      link: "/services/",
      imageUrl: "/new3.jpeg",
    },
    {
      key: "web_design",
      link: "/services/web-design",
      imageUrl: "/new5.jpeg",
    },
    {
      key: "development",
      link: "/services/development",
      imageUrl: "/new6.jpeg",
    },
  ];

  return (
    <Section
      as="header"
      id="services"
      ariaLabel="Services section"
      className="bg-black text-white space-y-4"
    >
      {services.map((item, index) => (
        <div
          key={item.key}
          className={`grid md:grid-cols-2 gap-4 group ${
            index % 2 === 0 ? "group-odd" : ""
          }`}
        >
          <div className="bg-[#2C2C2C] rounded-xl md:p-8 p-4 flex flex-col justify-between gap-32 md:order-2 md:group-odd:order-1">
            <Heading level={3}>{t(`services.${item.key}.title`)}</Heading>
            <div className="flex flex-col gap-8">
              <p className="max-w-xs">
                {t(`services.${item.key}.description`)}
              </p>
              <Link to={item.link} className="flex items-center">
                <Button size="small">Check out</Button>
                <button className="aspect-square p-1 rounded-full border-2 bg-white text-black border-white text-3xl flex justify-center items-center">
                  <GoPlus />
                </button>
              </Link>
            </div>
          </div>
          <div
            className="bg-cover bg-center rounded-xl md:order-1 md:group-odd:order-2"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          ></div>
        </div>
      ))}
    </Section>
  );
};

export default List;
