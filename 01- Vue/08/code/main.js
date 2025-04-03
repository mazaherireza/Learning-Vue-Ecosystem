const { createApp, ref } = Vue;

createApp({
  setup() {
    const hasStyle = ref(false);
    return {
      hasStyle,
    };
  },
}).mount("#app");
