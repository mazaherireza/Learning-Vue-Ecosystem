const { createApp, ref } = Vue;

createApp({
  setup() {
    const message = ref("I'm learning Vue.");
    return {
      message,
    };
  },
}).mount("#app");
