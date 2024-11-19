/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,tsx}", // Ensure this includes all files with JSX/TSX content
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Ensure fallback font is specified
      },
      colors: {
        // Example of extending colors for better brand consistency (add your own theme)
        primary: '#005f73',
        secondary: '#0a9396',
        accent: '#94d2bd',
        dark: '#001219',
        light: '#e9d8a6',
      },
    },
  },
  purge: {
    // Enable purging for production to remove unused CSS
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.{html,tsx,ts}',
    ],
  },
};
