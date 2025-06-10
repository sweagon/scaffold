import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const Hero = () => {
  const { t } = useTranslation("home");
  return (
    <div className="flex flex-col pb-12 sm:pb-16 md:pb-24">
      <Section
        as="header"
        id="hero"
        aria-label="Introduction section"
        className="md:min-h-screen md:bg-[url(/banner.png)] bg-no-repeat bg-contain bg-right-top md:!pt-48 !pt-32"
      >
        <motion.div
          className="md:max-w-[50%] flex flex-col items-end justify-end gap-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Heading level={1}>
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              {t("title")}
            </motion.span>
          </Heading>
          <motion.div
            className="pr-6 sm:pr-8 md:pr-16 lg:pr-24 xl:pr-32 flex flex-col items-end gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <p className="max-w-xs text-right">{t("description")}</p>
            <div className="flex items-center">
              <div>
                <Button
                  aria-label="Contact us button"
                  variant="primary"
                  size="medium"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* Lazy load the image to improve performance */}
      <motion.img
        src="/banner.png"
        className="md:hidden block max-w-xs ml-auto"
        alt="Banner image showcasing the agency's services"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
