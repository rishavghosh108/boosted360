/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      'nn1':'991px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.2)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-sm": { textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)" },
        ".text-shadow": { textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" },
        ".text-shadow-lg": { textShadow: "3px 3px 8px rgba(0, 0, 0, 0.5)" },
        ".text-shadow-none": { textShadow: "none" },
      });
    },
  ],
};
