const { createApp, ref } = Vue;

createApp({
  setup() {
    const path = ref("https://github.com/rezamazaheri");
    return {
      path,
    };
  },
}).mount("#app");
