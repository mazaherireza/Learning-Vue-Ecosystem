const { createApp, reactive } = Vue;

createApp({
  setup() {
    const formData = reactive({
      name: "",
      message: "",
    });

    const formSubmitted = () => {
      console.log("formData is: ", formData);
    };
    return {
      formData,
      formSubmitted,
    };
  },
}).mount("#app");
