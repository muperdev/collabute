import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          light: "#7300FF",
          dark: "#D4B0FF",
        },
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        meteor: "meteor 5s linear infinite",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
    },
  },

  plugins: [
    require("tailwindcss-animate"),
    function ({ addBase, theme }: PluginAPI) {
      const colors = theme("colors") as Record<
        string,
        { light: string; dark: string }
      >;

      const baseStyles: Record<
        string,
        Record<string, string | Record<string, string>>
      > = {};

      // Loop through the colors and set light and dark modes dynamically using the 'dark' class
      Object.entries(colors).forEach(([colorName, colorValue]) => {
        if (
          typeof colorValue === "object" &&
          colorValue.light &&
          colorValue.dark
        ) {
          baseStyles[`.bg-${colorName}`] = {
            backgroundColor: colorValue.light,
            ".dark &": {
              backgroundColor: colorValue.dark,
            },
          };
          baseStyles[`.text-${colorName}`] = {
            color: colorValue.light,
            ".dark &": {
              color: colorValue.dark,
            },
          };
        }
      });

      addBase(baseStyles);
    },
  ],
} satisfies Config;

export default config;
