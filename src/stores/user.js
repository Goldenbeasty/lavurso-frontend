import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    id: 1,
    role: "admin",
    name: "Some Admin",
    email: "admin@example.com",
    session_id: 12,
    token: "E43QXRERXIFXKBCNEJ3SHAE4NY",
  }),
  getters: {
    roleName: (state) => {
      switch (state.role) {
        case "admin":
          return "Administrator";
          break;
        case "teacher":
          return "Teacher";
          break;
        case "parent":
          return "Parent";
          break;
        case "student":
          return "Student";
          break;
      }
    },
  },
  actions: {},
});
