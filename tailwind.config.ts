const config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(61 61 61 / <alpha-value>)",
        foreground: "rgb(255 255 255 / <alpha-value>)",
        primary: "rgb(254 177 183 / <alpha-value>)",
        "primary-foreground": "rgb(255 255 255 / <alpha-value>)",
        "primary-dark": "rgb(230 124 160 / <alpha-value>)",
        accent: "rgb(255 202 127 / <alpha-value>)",
        card: "rgb(74 74 74 / <alpha-value>)",
        border: "rgb(90 90 90 / <alpha-value>)",
        muted: "rgb(90 90 90 / <alpha-value>)",
        "muted-foreground": "rgb(176 176 176 / <alpha-value>)",
      },
    },
  },
};

export default config;

