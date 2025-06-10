import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "./Button";
import LanguageSwitcher from "./LanguageSwitcher";

const items = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Services", url: "/services" },
  // { name: "Blog", url: "/blog" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Delays navigation by 1 second
  const handleNavigation = (url: string) => {
    setTimeout(() => {
      navigate(url);
    }, 1000);
  };

  // Toggles the menu and handles scrolling
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };

  // Highlight active links
  const linkHighlightClasses = (path: string) =>
    location.pathname === path ||
    (path !== "/" && location.pathname.startsWith(path))
      ? "md:!rounded-full first-of-type:rounded-t-2xl last-of-type:rounded-b-2xl bg-[#EFEFEF] md:text-base text-[calc(3rem+1vw)]"
      : "";

  return (
    <div
      className={`w-full p-4 sm:p-8 md:px-12 lg:px-16 fixed md:block flex flex-col sm:gap-8 gap-4 transition duration-500 z-40 ${
        isMenuOpen
          ? "h-screen md:bg-none bg-black/50 bg-clip-padding backdrop-filter backdrop-blur-md"
          : ""
      }`}
    >
      <nav
        className={`w-full flex justify-between items-center transition duration-500 ${
          isMenuOpen
            ? "bg-white"
            : "bg-white/50 bg-clip-padding backdrop-filter backdrop-blur-md"
        } md:p-2 py-2 px-4 rounded-full`}
      >
        <div className="pl-2">
          <a href="/" className="text-2xl font-bold">
            logo
          </a>
        </div>
        <ul className="hidden md:flex items-center font-semibold gap-4">
          {items.map(({ name, url }) => (
            <li key={url} className={`py-2 px-4 ${linkHighlightClasses(url)}`}>
              <button onClick={() => handleNavigation(url)}>{name}</button>
            </li>
          ))}
        </ul>
        <div className="flex items-center">
          <LanguageSwitcher />
          <Button size="small" className="md:block hidden">
            <button onClick={() => handleNavigation("/contact")}>
              Contact Us
            </button>
          </Button>
        </div>
        {/* Animated Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="h-full aspect-square flex flex-col justify-center items-center md:hidden relative"
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0.5" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-black transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : "my-1.5"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-black transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          ></span>
        </button>
      </nav>
      <ul
        className={`mobile grid bg-white h-full md:hidden font-semibold md:text-base text-[calc(2rem+1vw)] rounded-2xl divide-y transform ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        } transition duration-500`}
      >
        {items.map(({ name, url }) => (
          <li
            key={url}
            className={`py-2 px-4 md:text-left text-right ${linkHighlightClasses(
              url
            )}`}
          >
            <button onClick={() => handleNavigation(url)}>{name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
