const { createApp, ref } = Vue;

createApp({
  setup() {
    const show = ref(false);
    return {
      show,
    };
  },
}).mount("#app");
