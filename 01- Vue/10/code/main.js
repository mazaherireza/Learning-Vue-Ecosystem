const { createApp, ref } = Vue;

createApp({
  setup() {
    const quote = ref("");
    const color = "#E91E63";
    const active = ref(false);

    const style = () => {
      quote.value.style.color = color;
    };

    const onClick = () => {
      console.log("**");
      active.value = true;
      style();
    };
    return {
      quote,
      active,
      onClick,
    };
  },
}).mount("#app");
