/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
      },
      colors: {
        accent: {
          50:  "hsl(156, 100%, 95%)", // very pale neon green
          100: "hsl(156, 100%, 85%)", // soft mint
          200: "hsl(156, 100%, 70%)", // pastel green
          300: "hsl(156, 100%, 60%)", // light neon
          400: "hsl(156, 100%, 50%)", // exact neon green (#00FF9C)
          500: "hsl(156, 90%, 45%)",  // slightly deeper neon
          600: "hsl(156, 85%, 35%)",  // tealish neon green
          700: "hsl(156, 70%, 25%)",  // deep green
          800: "hsl(156, 60%, 18%)",  // very dark green
          900: "hsl(156, 50%, 12%)",  // near-black with green hue
          950: "hsl(156, 40%, 8%)",   // almost black
        },
      },
      keyframes: {
        wiggle: {
          "0%,100%": { transform: "traslateY(0%)" },
          "50%": { transform: "translateY(-100%)" },
        },
      },
      animation: {
        wiggle: "wiggle 15s linear infinite",
        "ping-slow": "ping 1.5s linear infinite",
      },
    },
  },
  plugins: [],
};
