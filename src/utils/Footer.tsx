import { Link, useLocation, useNavigation } from "react-router-dom";
import {
  CiDesktopMouse1,
  CiFacebook,
  CiInstagram,
  CiLinkedin,
} from "react-icons/ci";
import Heading from "./Heading";
import Button from "./Button";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const location = useLocation();
  const { t } = useTranslation("services");

  // Check if the current URL path is not "/contact"
  const isNotContactPage = location.pathname !== "/contact";

  return (
    <footer
      id="footer"
      aria-label="footer"
      className="md:space-y-24 sm:space-y-16 space-y-8"
    >
      {isNotContactPage && (
        <div className="grid md:grid-cols-2 md:gap-16 gap-4 p-6 sm:p-8 md:px-12 lg:px-16">
          <Heading level={2}>
            <span className="text-[#9C9C9C]">{t("cta.title")}</span>
            <br />
            {t("cta.subtitle")}
          </Heading>
          <div className="flex flex-col justify-between md:gap-16 gap-8">
            <p>{t("cta.description")}</p>
            <div className="flex items-center">
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      )}
      <div className="bg-black lg:grid flex flex-col grid-cols-3 gap-4 text-white p-4 sm:p-8 md:px-12 lg:px-16">
        <div className="rounded-xl bg-[#2C2C2C] p-8 flex flex-col justify-between gap-8">
          <div>
            <a href="/" className="text-2xl font-bold">
              LOGO
            </a>
          </div>
          <div className="flex justify-between items-end gap-8">
            <p className="max-w-56 text-right">
              With our tailored solutions and unwavering support, we empower you
              to realize your vision and thrive in today's dynamic landscape.
            </p>
          </div>
        </div>
        <div className="lg:col-span-2 rounded-xl bg-[#2C2C2C] p-8 flex flex-col gap-8">
          <div className="h-full flex sm:flex-row flex-col sm:gap-8 gap-16 justify-between">
            <div className="flex sm:justify-start justify-between md:gap-16 gap-8">
              <ul className="space-y-2">
                <li className="text-lg font-semibold mb-4">Quick Links</li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">Services</Link>
                </li>
                <li>
                  <Link to="/">Blog</Link>
                </li>
                <li>
                  <Link to="/">Contact Us</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-lg font-semibold mb-4">Our Services</li>
                <li>
                  <Link to="/">Web Design</Link>
                </li>
                <li>
                  <Link to="/">SEO</Link>
                </li>
                <li>
                  <Link to="/">Branding</Link>
                </li>
                <li>
                  <Link to="/">SEA</Link>
                </li>
                <li>
                  <Link to="/">Custom</Link>
                </li>
                <li>
                  <Link to="/">Development</Link>
                </li>
              </ul>
            </div>
            <div className="flex sm:justify-start justify-between md:gap-16 gap-8">
              <ul className="space-y-2">
                <li className="text-lg font-semibold mb-4">Contact</li>
                <li>
                  <Link to="/">hello@agency.uk</Link>
                </li>
                <li>
                  <Link to="/">+33 123 456 789</Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="text-lg font-semibold mb-4">Address</li>
                <li>
                  <Link to="/">
                    Uni 33 Studios <br /> Temple Gale <br />
                    Country, City
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul className="flex md:justify-end justify-center gap-2 text-3xl md:pb-2 pb-8">
              <li>
                <Link to="/">
                  <CiLinkedin />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiFacebook />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <CiInstagram />
                </Link>
              </li>
            </ul>
            <div className="pt-8 border-t flex md:flex-row flex-col justify-between items-center gap-4">
              <ul className="flex md:flex-row flex-col items-center gap-8">
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/">Cookie Policy</Link>
                </li>
                <li>
                  <Link to="/">Terms & Conditions</Link>
                </li>
              </ul>
              <p>&copy; 2025 Brand Name. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
