/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#5E00FF",
        secondary: "#FF8C59",
      },
      keyframes: {
        samples: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-72rem)" },
        },
      },
      animation: {
        samples: "samples 12s linear infinite",
      },
    },
    fontFamily: {
      sans: ["AppleSDGothicNeo", "Noto Sans KR"],
    },
  },
};
