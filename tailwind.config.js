module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  /* optimize for fast reload, dropping all non essential utility classes*/
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    options: {
      safelist: {
        standard: ['outline-none'],
      },
    },
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      // extend font family
      fontFamily: {
        'sans': ['Roboto', "ui-sans-serif", "BlinkMacSystemFont", "Segoe UI", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"]
      },
      /* background image */
      backgroundImage: theme => ({
        'mission': "url('https://source.unsplash.com/random')",
        'hero-section': "url('/assets/images/background.jpg')",
        'frosty-schene': "url('/assets/images/background-2.jpg')",
        'snowy-mountain': "url('/assets/images/background-1.jpg')",
        'about-one': "url('/assets/images/about-img-1.jpg')",
        'about-two': "url('/assets/images/about-img-2.jpg')",
        'about-three': "url('/assets/images/about-img-3.jpg')",
        'home-bg-1': "url('/assets/images/home-bg-3.jpg')",
        'home-bg-2': "url('/assets/images/home-bg-2.jpg')",
        'home-bg-3': "url('/assets/images/home-bg-1.jpg')",
      }),
      /* add to max width */
      maxWidth: {
        '8xl': '1920px', // custom screen size
      },
      /* height */
      height: {
        'hero-section': "40rem",
        'banner': '30rem',
      },
      /* colors */
      colors: {
        // Configure your color palette here
        'dark-color': {
          800: "rgba(0,0,0,0.66)",
          900: "#121212",
        },
        'events-color': '#ECF1F5',
        'blog-color': '#F0F2F5',
        'error-bg': '#007aff',
        'deep-yellow': "#FA8A00",
        'light-blue': "#03A9F4",
      },
      /* animations */
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        blob: "blob 7s infinite"
      },

      /* keyframes */
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.0)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.0)",
          },
        },

        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
