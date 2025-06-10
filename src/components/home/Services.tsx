import { GoPlus } from "react-icons/go";
import Button from "../../utils/Button";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t: home } = useTranslation("home");
  const { t: services } = useTranslation("services");

  return (
    <Section
      id="services"
      ariaLabel="Our Services"
      className="bg-black text-white md:space-y-24 sm:space-y-16 space-y-8"
    >
      <div className="grid md:grid-cols-2 md:gap-16 gap-4">
        <Heading level={2}>{home("mission_title")}</Heading>
        <p>{home("mission_description")}</p>
      </div>
      <div className="grid md:grid-cols-6 md:grid-rows-7 gap-4">
        <div className="bg-[#2C2C2C] md:col-span-3 md:row-span-2 rounded-xl md:p-8 px-4 py-6 flex flex-col justify-between gap-4">
          <Heading level={3}>{services("services.web_design.title")}</Heading>
          <div className="md:grid grid-cols-5 md:items-center flex flex-col gap-8">
            <div className="md:col-span-3 flex flex-col gap-8">
              <p>{services("services.web_design.description")}</p>
              <div className="md:flex hidden items-center">
                <Button size="small">Web Design</Button>
              </div>
            </div>
            <ul className="border-l h-fit pl-4 md:col-span-2 flex flex-col gap-1">
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                UI/UX
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                UI Research
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                Design
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                Web Development
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <Button size="small">Web Design</Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-3 md:row-span-3 rounded-xl">
          <img
            src="/new6.jpeg"
            alt="vision-2"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="md:col-span-3 md:row-span-3 rounded-xl">
          <img
            src="/new5.jpeg"
            alt="vision-1"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="bg-[#2C2C2C] md:col-span-3 md:row-span-2 rounded-xl md:p-8 px-4 py-6 flex flex-col justify-between gap-4">
          <Heading level={3}>{services("services.development.title")}</Heading>
          <div className="md:grid grid-cols-5 md:items-center flex flex-col gap-8">
            <div className="md:col-span-3 flex flex-col gap-8">
              <p>{services("services.development.description")}</p>
              <div className="md:flex hidden items-center">
                <Button size="small">Web Design</Button>
              </div>
            </div>
            <ul className="border-l h-fit pl-4 md:col-span-2 flex flex-col gap-1">
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                UI/UX
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                UI Research
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                Design
              </li>
              <li className="w-fit py-1 px-3 rounded-full border border-white">
                Web Development
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <Button size="small">Web Design</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C] md:col-span-2 md:row-span-2 rounded-xl md:p-8 px-4 py-6 flex flex-col justify-between gap-4">
          <Heading level={3}>{services("services.branding.title")}</Heading>
          <div className="flex flex-col gap-8">
            <p>{services("services.branding.description")}</p>
            <div className="flex items-center">
              <Button size="small">Branding</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C] md:col-span-2 md:row-span-2 rounded-xl md:p-8 px-4 py-6 flex flex-col justify-between gap-4">
          <Heading level={3}>{services("services.sea.title")}</Heading>
          <div className="flex flex-col gap-8">
            <p>{services("services.sea.description")}</p>
            <div className="flex items-center">
              <Button size="small">SEA</Button>
            </div>
          </div>
        </div>
        <div className="bg-[#2C2C2C] md:col-span-2 md:row-span-2 rounded-xl md:p-8 px-4 py-6 flex flex-col justify-between gap-4">
          <Heading level={3}>{services("services.seo.title")}</Heading>
          <div className="flex flex-col gap-8">
            <p>{services("services.sea.description")}</p>
            <div className="flex items-center">
              <Button size="small">Custom Development</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
