module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        yuggy: {
          primary: "#bb86fc",
          "primary-focus": "#8451c2",
          "primary-content": "#000000",
          secondary: "#3700b3",
          "secondary-focus": "#2e0099",
          "secondary-content": "#ffffff",
          accent: "#03dac6",
          "accent-focus": "#00a895",
          "accent-content": "#000000",
          neutral: "#171717",
          "neutral-focus": "#121212",
          "neutral-content": "#ffffff",
          "base-100": "#1c1c1c",
          "base-200": "#171717",
          "base-300": "#121212",
          "base-content": "#ffffff",
          info: "#2094f3",
          success: "#009485",
          warning: "#ff9900",
          error: "#ff5724"
        }
      }
    ]
  }
};
