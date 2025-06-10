import { GoPlus } from "react-icons/go";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { useTranslation } from "react-i18next";

const Processes = () => {
  const { t } = useTranslation("services");

  return (
    <Section
      id="hero"
      ariaLabel="Introduction section"
      className="md:space-y-24 sm:space-y-16 space-y-8 flex flex-col bg-[#EFEFEF]"
    >
      <Heading level={2}>Our Processes</Heading>
      <div className="grid md:grid-cols-6 sm:grid-cols-2 md:grid-rows-2 gap-4 h-full">
        <div className="md:col-span-3 rounded-xl bg-white md:p-8 p-4 flex flex-col gap-16">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
            01
          </div>
          <div className="space-y-4">
            {/* <Heading level={3}>Scoping session</Heading> */}
            <p>{t("process.scoping_session")}</p>
          </div>
        </div>
        <div className="md:col-span-3 rounded-xl bg-white md:p-8 p-4 flex flex-col gap-16">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
            01
          </div>
          <div className="space-y-4">
            {/* <Heading level={3}>Scoping session</Heading> */}
            <p>{t("process.proposal")}</p>
          </div>
        </div>
        <div className="md:col-span-2 rounded-xl bg-white md:p-8 p-4 flex flex-col gap-16">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
            01
          </div>
          <div className="space-y-4">
            {/* <Heading level={3}>Scoping session</Heading> */}
            <p>{t("process.strategy")}</p>
          </div>
        </div>
        <div className="md:col-span-2 rounded-xl bg-white md:p-8 p-4 flex flex-col gap-16">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
            01
          </div>
          <div className="space-y-4">
            {/* <Heading level={3}>Scoping session</Heading> */}
            <p>{t("process.build")}</p>
          </div>
        </div>
        <div className="md:col-span-2 rounded-xl bg-white md:p-8 p-4 flex flex-col gap-16">
          <div className="w-12 h-12 rounded-full bg-black text-white flex justify-center items-center font-inter font-bold">
            01
          </div>
          <div className="space-y-4">
            {/* <Heading level={3}>Scoping session</Heading> */}
            <p>{t("process.deliver")}</p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Processes;
