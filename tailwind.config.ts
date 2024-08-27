import type { Config } from "tailwindcss"

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
      keyframes: {
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
        underlineAnimation: 'underlineAnimation 0.3s ease-in-out',
      },

      colors: {
        dark:{
          bg: 'rgba(22, 24, 28, 1)',
          buttons:{
            btnGray: 'rgba(65, 72, 84, 1)',
            btnGrayText: 'rgba(121, 138, 152, 1)',
            btnBlue: 'rgba(36, 194, 216, 1)',
          },
          inputs:{
            inputGray: 'rgba(67, 73, 86, 1)',
            inputText: 'rgba(123, 133, 152, 1)',
          },
          components:{
            title: 'rgba(255, 255, 255, 0.7)',
            componentGray: 'rgba(38, 41, 47, 1)',
            componentText: 'rgba(140, 153, 176, 1)',
          }
        },
        light:{
          bg: 'rgba(229, 231, 235, 1)',
          buttons:{
            btnLight: 'rgba(255, 255, 255, 1)',
            btnLightText: 'rgba(38, 41, 47, 1)',
            btnBlue: 'rgba(36, 194, 216, 1)',
          },
          inputs:{
            inputLight: 'rgba(229, 231, 235, 1)',
            inputText: 'rgba(40, 40, 40, 1)',
          },
          components:{
            title: 'rgba(40, 40, 40, 1)',
            componentLight: 'rgba(255, 255, 255, 1)',
            componentText: 'rgba(40, 40, 40, 0.78)',
          }
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config