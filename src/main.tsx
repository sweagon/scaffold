import { StrictMode, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n, { initializeI18n } from "./i18n"; // Import i18n instance
import "./main.css";
import Home from "./views/Home";
import AboutUs from "./views/AboutUs";
import Footer from "./utils/Footer";
import Navbar from "./utils/Navbar";
import ScrollToTop from "./utils/ScrollToTop";
import Blog from "./views/Blog";
import Services from "./views/Services";
import Read from "./components/blog/Read";
import Contact from "./views/Contact";
import SingleService from "./components/services/SingleService";
import Curtain from "./utils/Curtain"; // Import Curtain
import ScrollToTopButton from "./utils/ScrollToTopButton";

const Root = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initializeI18n()
      .then(() => setReady(true))
      .catch((err: unknown) =>
        console.error("i18n initialization error:", err)
      );
  }, []);

  if (!ready) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading translations...
      </div>
    );
  }

  return (
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <Router
          future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
        >
          <App />
        </Router>
      </I18nextProvider>
    </StrictMode>
  );
};

const App = () => {
  const location = useLocation(); // Use useLocation to detect route changes
  const [isPageChanging, setIsPageChanging] = useState(false);

  // Callback to handle animation completion
  const handleAnimationComplete = () => {
    setIsPageChanging(false); // Allow page change after animation
  };

  return (
    <>
      <ScrollToTop />
      <Curtain onAnimationComplete={handleAnimationComplete} />
      <Navbar />
      {/* Delay rendering of new page content until animation completes */}
      {!isPageChanging && (
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:read" element={<SingleService />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:read" element={<Read />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
      <ScrollToTopButton />
      <Footer />
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<Root />);
