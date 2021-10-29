module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1500px',
    },
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: 'pink'
      },
      fontFamily: {
        body : ['Poppins']
      },
      backgroundImage: {
        'banner-bg' : "url('../public/images/banner/bg_banner.jpg')",
        'login-bg' : "url('../public/images/login/login_bg.jpg')",
      },
      height: {
        'bg-height' : '600px',
      },
      width: {
        'card-width': '740px',
        'drop-w'    : '200px',
      },
    },
    maxWidth: {
      'drop-max': '250px',
    },
    minHeight: {
      'min-h-log-h': '526px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
