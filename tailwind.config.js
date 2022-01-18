module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {
      keyframes: {
        hand: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        hand: 'hand 1s ease-in-out infinite',
      },
      screens: {
        sm: "425px", // Mobile L
        md: "768px", // Tablet
        lg: "1024px", // Laptop
        xl: "1440px", // Laptop L
      },
      colors: {
        raisinBlack: "#1A181B",
        fireOpal: "#EF6461",
        languidLavender: "#D8D2E1",
        tiffanyBlue: "#1EC6BC",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif']
      },
    },
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '5': '5px',
      '6': '6px',
      '8': '8px',
    }
  },
  plugins: [],
};
