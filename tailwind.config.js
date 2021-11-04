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
        'details-bg' : "url('../public/images/details/01.jpg')",
        'cart-bg' : "url('../public/images/banner/cart_bg.png')",
      },
      height: {
        'bg-height' : '600px',
      },
      width: {
        'card-width': '740px',
        'drop-w'    : '200px',
        'list-img'  : '160px',
      },
    },
    maxWidth: {
      'drop-max': '250px',
      'cart-max' : '1000px',
    },
    minHeight: {
      'min-h-log-h': '526px',
      'restItem-h' : '125px',
      'details-h' : '150px',
      'cart-h' : '300px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
