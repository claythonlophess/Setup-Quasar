// src/services/api.js

import { boot } from "quasar/wrappers";

const $icons = {
  whatsapp_white: "./src/assets/img/whatsapp-icon-white.png",

  whatsapp_green: "./src/assets/img/whatsapp-icon-green.png",
};

const $logos = {
  your_logo: "./src/assets/img/your_logo.jpg",
  ics: "./src/assets/img/Capture.PNG",
};

const $ilustre = {
  geral_turismo_green_1: "./src/assets/svg/ecotourism-bro.svg",
  podcast: "./src/assets/svg/podcast-bro.svg",
  Hand_coding: "./src/assets/svg/Hand coding-bro.svg",

};

export default boot(({ app }) => {
  app.config.globalProperties.$icons = $icons;
});

export { $icons, $ilustre, $logos };
