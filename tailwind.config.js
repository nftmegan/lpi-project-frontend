module.exports = {
  purge: ['./components/**/*.tsx', './pages/**/*.tsx','./public/**/*.html'], //add this line
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'authenticationbg': "url('/images/authentication_bg.jpg')",
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#1373E5',
        'primary-hover': '#0D66D0',
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['PLAGUE', 'ROBOTO', 'GOVER', 'CONFESSION', 'CHURSTYROCK', 'S0BERFONT', 'SPLINESANS', 'Helvetica', 'Arial', 'sans-serif']
      },
      maxWidth: {
        '8xl': '100rem',
      },
      animation: {
        fade: 'fadeOut 1s ease-in-out',
      },

      // that is actual animation
      keyframes: {
        fadeOut: {
          '0%': { opacity: 0, transform: "translateY(20px)" },
          '100%': { opacity : 100, transform: "translateY(0)" },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}