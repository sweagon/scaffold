import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const savedLanguage = localStorage.getItem("language") || "en";

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }

  const changeLanguage = async (lng: string) => {
    setLoading(true);
    try {
      const namespaces = [
        "home",
        "sea",
        "seo",
        "about",
        "branding",
        "development",
      ]; // Add all your namespaces here
      for (const ns of namespaces) {
        const translations = await import(`../locales/${lng}/${ns}.json`);
        i18n.addResourceBundle(lng, ns, translations.default);
      }

      await i18n.changeLanguage(lng);
      localStorage.setItem("language", lng);
      navigate(location.pathname);
    } catch (error) {
      console.error(`Failed to load translations for language ${lng}:`, error);
      await i18n.changeLanguage("en");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" relative w-11 uppercase group">
      <div className="size-11 bg-white z-10 relative flex items-center justify-center rounded-full">
        {savedLanguage}
      </div>
      <div className="absolute w-full right-0 z-0 -top-[2px] border-white h-0 group-hover:h-auto transition-all">
        <ul className="pt-5 bg-gray-100/90 bg-clip-padding backdrop-filter backdrop-blur-md rounded-b-full mt-7 pb-1.5 flex flex-col items-center gap-2 text-sm opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all">
          {["en", "de", "tr"].map((lng) => (
            <li>
              <Link
                className="size-8 flex justify-center items-center transition-all rounded-full hover:bg-black hover:text-white cursor-pointer"
                to={location.pathname}
                key={lng}
                onClick={() => changeLanguage(lng)}
                aria-disabled={loading} // Disable buttons while loading
              >
                {loading && i18n.language === lng
                  ? "Loading..."
                  : lng.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
