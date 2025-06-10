/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,tsx}", // Ensure this includes all files with JSX/TSX content
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Urbanist", "sans-serif"], // Ensure fallback font is specified\
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        // Example of extending colors for better brand consistency (add your own theme)
        primary: "#005f73",
        secondary: "#0a9396",
        accent: "#94d2bd",
        dark: "#001219",
        light: "#e9d8a6",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".subtitle": {
          fontFamily: "Urbanist, sans-serif",
          fontSize: "36px",
          fontWeight: "600", // Tailwind uses numeric values (600 = semibold)
          lineHeight: "1.2", // Adjusted for better spacing
        },
        "@screen md": {
          ".subtitle": {
            fontSize: "32px",
          },
        },
        "@screen sm": {
          ".subtitle": {
            fontSize: "28px",
          },
        },
      });
    },
  ],
};
