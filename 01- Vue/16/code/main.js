import TheSalutation from "./components/TheSalutation.vue";

// Error: main.js:1 Uncaught SyntaxError: Cannot use import statement outside a module

const { createApp, ref } = Vue;

// Create an application instance.
const app = createApp({
  template: `
      <TheSalutation :name="name" />
      <p>I'm a {{ job }}.</p>
    `,
  components: {
    TheSalutation,
  },
  setup() {
    const name = ref("Reza Mazaheri");
    const job = ref("frontend developer");
    return {
      name,
      job,
    };
  },
});

app.mount("#app");
