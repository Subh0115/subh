import type { Config } from "tailwindcss";

export default {
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
        primary: "#0D0D0D",
        secondary: "#8A2BE2",
        accent: "#39FF14",
        background: "#0D0D0D",
        surface: "#1A1A1A",
        muted: "#666666",
        "muted-foreground": "#888888",
        border: "#333333",
        input: "#222222",
        foreground: "#FFFFFF",
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #0D0D0D, #8A2BE2)',
        'gradient-accent': 'linear-gradient(to right, #8A2BE2, #39FF14)',
        'gradient-dark': 'linear-gradient(to bottom, #0D0D0D, #1A1A1A)',
      },
      fontFamily: {
        sans: ["-apple-system", "SF Pro Display", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "hover-glow": "hover-glow 1s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": {
            opacity: "1",
            boxShadow: "0 0 20px rgba(138, 43, 226, 0.2)",
          },
          "50%": {
            opacity: "0.8",
            boxShadow: "0 0 40px rgba(138, 43, 226, 0.4)",
          },
        },
        "hover-glow": {
          "0%, 100%": {
            boxShadow: "0 0 15px rgba(57, 255, 20, 0.3)",
          },
          "50%": {
            boxShadow: "0 0 30px rgba(138, 43, 226, 0.5)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;