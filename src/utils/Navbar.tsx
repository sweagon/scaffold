import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";

const items = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add or remove no-scroll class to body
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("!overflow-hidden");
    } else {
      document.body.classList.remove("!overflow-hidden");
    }

    return () => {
      document.body.classList.remove("!overflow-hidden");
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="w-full py-8 px-6 sm:px-8 md:px-12 lg:px-16 flex justify-between items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-white/5">
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/logos/logo-gold.webp"
            alt="logo"
            className="w-[calc(2rem+2vw)]"
          />
          <span className="text-xl text-[#efd704]">Eagle Eyes Built</span>
        </a>
        <ul className="hidden md:flex lg:space-x-8 md:space-x-4 items-center">
          {items.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-white hover:text-[#efd704] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className={`h-full aspect-square flex flex-col justify-center items-center md:hidden relative transition ${
            isMenuOpen ? "invisible" : "visible"
          }`}
          aria-label="Toggle Menu"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-0.5" : ""
            }`}
          ></span>
          <span
            className={`h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "w-0" : "w-4 my-1.5"
            }`}
          ></span>
          <span
            className={`h-0.5 w-6 bg-white transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-0.5" : ""
            }`}
          ></span>
        </button>
        <div className="md:grid hidden">
          <span>Auckland</span>
          <span>
            <a href="https://wa.me/021909231?text=Hi,%20Alban!" target="_blank">
              021909231
            </a>
          </span>
        </div>
      </nav>
      <ul
        className={`fixed top-0 left-0 h-screen !z-40 w-full flex flex-col justify-center items-center gap-8 bg-black/90 text-[calc(1rem+1vw)] transition-all ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {items.map((item) => (
          <li key={item.name} onClick={toggleMenu}>
            <a
              href={item.href}
              className="text-white hover:text-[#efd704] transition"
            >
              {item.name}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={toggleMenu}
            className="h-full aspect-square flex flex-col justify-center items-center md:hidden relative !z-[999] text-2xl"
            aria-label="Toggle Menu"
          >
            <AiOutlineClose />
          </button>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
