const { createApp, ref } = Vue;

createApp({
  setup() {
    const salutation = () => {
      return "Hello! Welcome to my page.";
    };

    const name = ref("Reza");
    const family = ref("Mazaheri");
    const introduce = () => {
      return `I'm ${name.value} ${family.value}.`;
    };

    return {
      salutation,
      introduce,
    };
  },
}).mount("#app");
