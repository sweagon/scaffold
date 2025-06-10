import { useTranslation } from "react-i18next";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Hero = () => {
  const { t } = useTranslation("about");

  return (
    <Section
      as="header"
      id="hero"
      ariaLabel="Introduction section"
      className="bg-black text-white md:space-y-24 sm:space-y-16 space-y-8 md:!pt-48 !pt-32 !mb-24"
    >
      <Heading level={1}>{t("title")}</Heading>
      <div className="grid md:grid-cols-2 md:gap-32 gap-4">
        <div className="space-y-4 md:order-1 order-2">
          <p className="subtitle">{t("description")}</p>
          <p>{t("challenges")}</p>
          <p>{t("services")}</p>
        </div>
        <img
          src="/team.png"
          alt="team"
          className="object-cover object-center md:order-2 order-1"
        />
      </div>
    </Section>
  );
};

export default Hero;
