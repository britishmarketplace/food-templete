module.exports = {
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
        btnBg: '#2FA2E9',
        primaryColor: '#C8102E',
        themeColor: '#253477',
      },
      fontFamily: {
        body : ['Poppins']
      },
      backgroundImage: {
        'banner-bg' : "url('../public/images/banner/bg_banner.png')",
        'login-bg' : "url('../public/images/login/login_bg.jpg')",
        'details-bg' : "url('../public/images/details/01.jpg')",
        'cart-bg' : "url('../public/images/banner/cart_bg.png')",
        'order-bg' : "url('../public/images/history/bg.jpg')"
      },
      height: {
        'bg-height' : '550px',
      },
      width: {
        'card-width': '740px',
        'drop-w'    : '200px',
        'list-img'  : '160px',
      },
      boxShadow: {
        ' ': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
    maxWidth: {
      'drop-max': '250px',
      'cart-max' : '1000px',
      'card-text' : '430px',
      'delivery-des' : '580px',
      'step-text': '300px',
      'max-car' : '250px',
    },
    minHeight: {
      'min-h-log-h': '526px',
      'restItem-h' : '125px',
      'details-h' : '150px',
      'cart-h' : '300px',
      'food-app' : '600px',
    }
  },
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  variants: {
    extend: {},
  },
  plugins: [],
}
