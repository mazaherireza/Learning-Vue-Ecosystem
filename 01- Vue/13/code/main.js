const { createApp, reactive } = Vue;

createApp({
  setup() {
    const formData = reactive({
      name: "",
      gender: "",
      favProgrammingLanguages: [],
      position: "",
      message: "",
    });

    const programmingLanguages = ["JavaScript", "PHP", "Python", "Go"];
    const positions = [
      "Frontend Developer",
      "Backend Developer",
      "Fullstack Developer",
    ];

    const formSubmitted = () => {
      console.log("formData is: ", formData);
    };
    return {
      formData,
      programmingLanguages,
      positions,
      formSubmitted,
    };
  },
}).mount("#app");
