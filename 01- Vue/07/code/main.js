const { createApp, reactive } = Vue;

createApp({
  setup() {
    const project = reactive({
      name: "",
      languages: [""],
    });
    return {
      project,
    };
  },
}).mount("#app");
