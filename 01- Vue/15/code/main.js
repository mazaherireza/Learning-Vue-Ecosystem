const { createApp, ref } = Vue;

const Salutation = {
  template: `<h3>Hello, I'm {{ props.name }}.</h3>`,
  props: {
    name: String,
  },
  setup(props) {
    return {
      props,
    };
  },
};

// Create an application instance.
const app = createApp({
  template: `
      <TheSalutation :name="name" />
      <p>I'm a {{ job }}.</p>
    `,
  components: {
    TheSalutation: Salutation,
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
