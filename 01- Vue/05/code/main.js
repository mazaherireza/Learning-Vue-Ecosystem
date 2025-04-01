const { createApp, ref } = Vue;

createApp({
  setup() {
    const skills = [
      {
        _id: "SKL-1001",
        title: "HTML",
      },
      {
        _id: "SKL-1002",
        title: "CSS",
      },
      {
        _id: "SKL-1003",
        title: "JavaScript",
      },
      {
        _id: "SKL-1004",
        title: "Vue.js",
      },
      {
        _id: "SKL-1005",
        title: "Git",
      },
      {
        _id: "SKL-1006",
        title: "Scrum",
      },
    ];
    return {
      skills,
    };
  },
}).mount("#app");
