import { Link } from "react-router-dom";
import Heading from "../../utils/Heading";
import Section from "../../utils/Section";
import { CiFacebook, CiInstagram, CiLinkedin } from "react-icons/ci";
import Button from "../../utils/Button";
import { GoPlus } from "react-icons/go";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation("home");

  return (
    <Section
      as="header"
      id="hero"
      ariaLabel="Introduction section"
      className=" md:!pt-48 !pt-32 md:space-y-24 sm:space-y-16 space-y-8"
    >
      <Heading level={1}>{t("contact_title")}</Heading>
      <div className="grid md:grid-cols-3 gap-4">
        <form
          action=""
          className="bg-[#EFEFEF] md:col-span-2 border rounded-[2rem] space-y-8 md:p-8 py-8 px-4 md:order-1 order-2"
        >
          <div className="space-y-2">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              className="w-full bg-transparent border border-[#9C9C9C] p-4 rounded-full"
              placeholder="Enter your full name"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="fullName">Email address *</label>
              <input
                type="text"
                className="w-full bg-transparent border border-[#9C9C9C] p-4 rounded-full"
                placeholder="Enter your email address"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="fullName">Phone number *</label>
              <input
                type="text"
                className="w-full bg-transparent border border-[#9C9C9C] p-4 rounded-full"
                placeholder="Enter your phone number"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="fullName">Current site URL *</label>
            <input
              type="text"
              className="w-full bg-transparent border border-[#9C9C9C] p-4 rounded-full"
              placeholder="Enter your current site URL"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="fullName">How can we help you *</label>
            <ul className="flex gap-2 font-bold flex-wrap">
              <li className="bg-[#E2E2E2] py-1 px-4 rounded-full border border-black">
                Latest
              </li>
              <li className="bg-[#E2E2E2] py-1 px-4 rounded-full">
                Web Design
              </li>
              <li className="bg-[#E2E2E2] py-1 px-4 rounded-full">SEO</li>
              <li className="bg-[#E2E2E2] py-1 px-4 rounded-full">SEA</li>
              <li className="bg-[#E2E2E2] py-1 px-4 rounded-full">Latest</li>
            </ul>
          </div>
          <div className="space-y-2">
            <label htmlFor="fullName">Message *</label>
            <textarea
              className="w-full bg-transparent border border-[#9C9C9C] p-4 rounded-[1rem]"
              placeholder="Enter your message"
            />
          </div>
          <div className="flex items-center">
            <Button>Send</Button>
          </div>
        </form>
        <div className="w-full h-fit bg-black text-white p-4 rounded-[2rem] space-y-4 text-center md:order-2 order-1">
          <p className="text-[#9C9C9C] font-inter">Other contact options:</p>
          <ul className="grid gap-4">
            <li className="p-4 rounded-full bg-[#2C2C2C]">hello@agency.uk</li>
            <li className="p-4 rounded-full bg-[#2C2C2C]">+33 123 456 789</li>
            <li>
              <ul className="grid grid-cols-3 gap-4 text-3xl">
                <li className="p-4 bg-[#2C2C2C] rounded-2xl flex justify-center items-center">
                  <Link to="/">
                    <CiLinkedin />
                  </Link>
                </li>
                <li className="p-4 bg-[#2C2C2C] rounded-2xl flex justify-center items-center">
                  <Link to="/">
                    <CiFacebook />
                  </Link>
                </li>
                <li className="p-4 bg-[#2C2C2C] rounded-2xl flex justify-center items-center">
                  <Link to="/">
                    <CiInstagram />
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
