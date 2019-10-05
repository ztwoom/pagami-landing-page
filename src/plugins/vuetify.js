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
        surface: "#2C3748",
        paragraph: "#718096"
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
