const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      }
    },
    fontFamily: {
      'display': ['Oswald','Helvetica', 'Arial' ],
      'body': ['"Open Sans"',],
      'oswald': ['Oswald', 'sans-serif' ],
      'lato': ['Lato', 'sans-serif'],
      'gunsan': ['gunsan', 'sans-serif'],
      'barlow': ['Barlow', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
      
    }
  },
  darkMode: "class",
  plugins: [nextui(
    {
      layout: {}, // common layout options
      themes: {
        light: {
          layout: { 
            hoverOpacity: 0.8, //  this value is applied as opacity-[value] when the component is hovered
            boxShadow: {
              small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.02), 0px 2px 10px 0px rgb(0 0 0 / 0.06), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.03), 0px 2px 30px 0px rgb(0 0 0 / 0.08), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.04), 0px 30px 60px 0px rgb(0 0 0 / 0.12), 0px 0px 1px 0px rgb(0 0 0 / 0.3)",
          },
        }, 
        colors: {
            background: "#dbd6d0",
            foreground: {
              100:"#69645d",
              200:"#5d574b",
              300:"#474639",
              400:"#474039",
              500:"#322d28",
              600:"#2b2721",
              DEFAULT: "#2b2721"
            },
            devider: "#988e82",
            focus: "#110d04",
            danger: {
              100: "#da9f93",
              200: "#c75146",
              300: "#b23a48",
              400: "#8c2f39",
              500: "#a71e34",
              600: "#a11d33",
              700: "#85182a",
              800: "#6e1423",
              900: "#641220",
              foreground: "ecc8af", // contrast color
              DEFAULT: "#931C17"
            },
          
        }
        },
        dark: {
          layout: { hoverOpacity: 0.9, //  this value is applied as opacity-[value] when the component is hovered
          boxShadow: {
            // shadow-small
            small:
              "0px 0px 5px 0px rgb(0 0 0 / 0.05), 0px 2px 10px 0px rgb(0 0 0 / 0.2), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-medium
            medium:
              "0px 0px 15px 0px rgb(0 0 0 / 0.06), 0px 2px 30px 0px rgb(0 0 0 / 0.22), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
            // shadow-large
            large:
              "0px 0px 30px 0px rgb(0 0 0 / 0.07), 0px 30px 60px 0px rgb(0 0 0 / 0.26), inset 0px 0px 1px 0px rgb(255 255 255 / 0.15)",
          },
  
           
        }, 
        colors: {
          background: "#0D001A",
            foreground: "#ffffff",

        }
        },
        // ... custom themes
      },
    }
  )]
}

