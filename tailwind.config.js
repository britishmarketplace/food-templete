module.exports = {
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1500px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        btnBg: "#2FA2E9",
        primaryColor: "#C8102E",
        themeColor: "#253477",
        googleColor: "#DF4B38",
        facebookColor: "#3E5C9A",
      },
      fontFamily: {
        body: ["Poppins"],
      },
      backgroundImage: {
        "banner-bg": "url('../public/images/banner/bg_banner.jpg')",
        "login-bg": "url('../public/images/login/login_bg.jpg')",
        "details-bg": "url('../public/images/details/01.jpg')",
        "cart-bg": "url('../public/images/banner/cart_bg.png')",
        "cart-bgs": "url('../public/images/banner/cart_bg.png')",
        "order-bg": "url('../public/images/history/bg.jpg')",
        "privacy-camp" : "url('../public/images/banner/privacy-cam.png')",
      },
      height: {
        "bg-height": "550px",
      },
      width: {
        "card-width": "740px",
        "drop-w": "200px",
        "list-img": "160px",
      },
      boxShadow: {
        themeShadow: "0px 1px 7px rgba(46, 49, 146, 0.13)",
      },
      outlineWidth: {
        search_outline: '.5px',
      }
    },
    maxWidth: {
      "drop-max": "250px",
      "cart-max": "1000px",
      "card-text": "430px",
      "delivery-des": "580px",
      "step-text": "300px",
      "max-car": "250px",
      "max-profile": "500px",
    },
    minHeight: {
      "min-h-log-h": "526px",
      "restItem-h": "125px",
      "details-h": "150px",
      "cart-h": "300px",
      "food-app": "316px",
    },
  },
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
