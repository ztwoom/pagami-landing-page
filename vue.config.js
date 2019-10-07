module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("vue-svg-loader").loader("vue-svg-loader");
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/sass/main.scss"`
      }
    }
  },
  productionSourceMap: false,
  pwa: {
    themeColor: "#2C3748",
    name: "Pagami",
    iconPaths: {
      favicon32: "img/icons/icon-favicon-32x32.png",
      favicon16: "img/icons/icon-favicon-16x16.png",
      appleTouchIcon: "img/icons/icon-apple-touch-icon-152x152.png",
      maskIcon: "img/icons/icon-safari-pinned-tab.svg",
      msTileImage: "img/icons/icon-msapplication-icon-144x144.png"
    },
    manifestOptions: {
      background_color: "#2C3748",
      msTileColor: "#2C3748",
      lang: "es-CO",
      description:
        "Con Pagami puedes encontrar negocios cercanos, ver su catálogo de productos y servicios, información de contacto y ganar dinero mientras registras negocios 📸💰",
      icons: [
        {
          src: "./img/icons/icon-android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-apple-touch-icon-60x60.png",
          sizes: "60x60",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-apple-touch-icon-76x76.png",
          sizes: "76x76",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-apple-touch-icon-120x120.png",
          sizes: "120x120",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-apple-touch-icon-152x152.png",
          sizes: "152x152",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-apple-touch-icon-180x180.png",
          sizes: "180x180",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-favicon-16x16.png",
          sizes: "16x16",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-favicon-32x32.png",
          sizes: "32x32",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-msapplication-icon-144x144.png",
          sizes: "144x144",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-mstile-150x150.png",
          sizes: "150x150",
          type: "image/png"
        },
        {
          src: "./img/icons/icon-safari-pinned-tab.svg",
          sizes: "16x16",
          type: "image/svg+xml"
        }
      ]
    }
  }
};
