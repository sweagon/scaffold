import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const namespaces = [
  "home",
  "sea",
  "seo",
  "about",
  "branding",
  "development",
  "services",
];
const savedLanguage = localStorage.getItem("language") || "en";

// Function to dynamically load translation files
const loadResources = async (
  lng: string
): Promise<Record<string, Record<string, any>>> => {
  const resources: Record<string, Record<string, any>> = {};

  for (const ns of namespaces) {
    try {
      const module = await import(`./locales/${lng}/${ns}.json`);
      if (!resources[lng]) {
        resources[lng] = {};
      }
      resources[lng][ns] = module.default;
    } catch (error) {
      console.error(
        `Failed to load namespace '${ns}' for language '${lng}':`,
        error
      );
    }
  }

  return resources;
};

// Initialize i18n and ensure it's ready before rendering the app
const initializeI18n = async (): Promise<void> => {
  const defaultResources = await loadResources(savedLanguage);

  await i18n.use(initReactI18next).init({
    lng: savedLanguage,
    fallbackLng: "en",
    defaultNS: "home",
    ns: namespaces,
    resources: defaultResources, // ✅ Fixed structure
    interpolation: { escapeValue: false },
    react: {
      useSuspense: true, // Set to false if you handle loading manually
    },
  });

  // Listen for language changes and load translations dynamically
  i18n.on("languageChanged", async (lng: string) => {
    const newResources = await loadResources(lng);
    Object.keys(newResources[lng]).forEach((ns) => {
      i18n.addResourceBundle(lng, ns, newResources[lng][ns], true, true);
    });
  });
};

export { initializeI18n };
export default i18n;
