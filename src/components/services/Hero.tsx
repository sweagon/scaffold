import { useTranslation } from "react-i18next";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";

const Hero = () => {
  const { t } = useTranslation("services");

  return (
    <Section
      as="header"
      id="hero"
      ariaLabel="Introduction section"
      className="md:!pt-48 !pt-32 !pb-0 bg-black text-white"
    >
      <div className="grid md:grid-cols-2 md:gap-16 gap-4">
        <Heading level={1}>{t("title")}</Heading>
        <p>{t("description")}</p>
      </div>
    </Section>
  );
};

export default Hero;
