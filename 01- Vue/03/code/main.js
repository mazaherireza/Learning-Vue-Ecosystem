const { createApp, ref } = Vue;

createApp({
  setup() {
    const path = ref("https://github.com/mazaherireza");
    return {
      path,
    };
  },
}).mount("#app");
