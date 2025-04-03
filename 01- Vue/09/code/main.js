const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const searchQuery = ref("");
    const userList = [
      {
        fullname: "Mir Hossein Dezfoulian",
        _id: "UR_1001",
      },
      {
        fullname: "Hassan Khotanlou",
        _id: "UR_1002",
      },
      {
        fullname: "Mohammad Nasiri",
        _id: "UR_1003",
      },
      {
        fullname: "Farnoush Farzaneh",
        _id: "UR_1004",
      },
      {
        fullname: "Sima Shafaei",
        _id: "UR_1005",
      },
    ];
    const resultQuery = computed(() => {
      if (searchQuery.value) {
        return userList.filter((user) => {
          return user.fullname
            .toLowerCase()
            .includes(searchQuery.value.toLowerCase());
        });
      } else {
        return userList;
      }
    });
    return {
      searchQuery,
      resultQuery,
    };
  },
}).mount("#app");
