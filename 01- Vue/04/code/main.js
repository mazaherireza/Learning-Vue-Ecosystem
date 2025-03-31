const { createApp, ref } = Vue;

createApp({
  setup() {
    const graduated = ref(true);
    const yearsOfExperience = ref(4);
    return {
      graduated,
      yearsOfExperience,
    };
  },
}).mount("#app");
