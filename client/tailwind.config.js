module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "base-0": "#121212",
        "base-1": "#1E1E1E",
        "base-2": "#232323",
        "base-3": "#252525",
        "base-4": "#272727",
        "base-6": "#2C2C2C",
        "base-8": "#2E2E2E",
        "base-12": "#333333",
        "base-16": "#363636",
        "base-24": "#383838",
        accent: "#4FB5FF"
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
