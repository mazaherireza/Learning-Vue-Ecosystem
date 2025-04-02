const { createApp, ref } = Vue;

createApp({
  setup() {
    const visibility = ref(true);
    const imgPath = ref("./assets/Shah_Mosque.png");
    const altText = ref("Shah Mosque");
    const location = ref("Isfahan");
    return {
      visibility,
      imgPath,
      altText,
      location,
    };
  },
}).mount("#app");
