import Vue from "vue";
import Vuetify from "vuetify/lib";
import es from "vuetify/es5/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: "#FFAB40",
        "primary-light": "#FFDD71",
        surface: "#2C3748",
        paragraph: "#718096",
        blue: "#77AAFF",
        green: "#68D391",
        red: "#E53E3E",
        purple: "#8A72CB",
        gold: "#FBD38D"
      }
    }
  },
  lang: {
    locales: { es },
    current: "es"
  },
  icons: {
    iconfont: "mdiSvg"
  }
});
