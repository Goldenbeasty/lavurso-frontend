const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //  path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "admin/users",
        component: () => import("pages/Admin/UsersList.vue"),
      },
      {
        path: "admin/users/:id",
        component: () => import("pages/Admin/UserEdit.vue"),
        props: true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
