const { createApp, reactive } = Vue;

createApp({
  setup() {
    const formData = reactive({
      name: "",
      gender: "",
      favProgrammingLanguages: [],
      message: "",
    });

    const programmingLanguages = ["JavaScript", "PHP", "Python", "Go"];

    const formSubmitted = () => {
      console.log("formData is: ", formData);
    };
    return {
      formData,
      programmingLanguages,
      formSubmitted,
    };
  },
}).mount("#app");
