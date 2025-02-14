/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        wavey: {
          "0%,100%" : {
            transform: "scaleY(0.5)"
          },
          "50%" : {
            transform: "scaleY(1.5)"
          }
        }
      },
      animation: {
        wavey : "wavey linear 1000ms infinite"
      }
    }
  },
  plugins: [require('./plugins/openVariant'),require('./plugins/animationDelay'),require('./plugins/tableCaption')],
};
