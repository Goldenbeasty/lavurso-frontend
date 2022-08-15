const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      //  path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "messages",
        component: () => import("pages/User/MessageList.vue"),
      },
      {
        path: "messages/new",
        component: () => import("pages/User/MessageNew.vue"),
      },
      {
        path: "messages/:id",
        component: () => import("pages/User/MessagePage.vue"),
        props: true,
      },
      {
        path: "messages/:id/members",
        component: () => import("pages/User/MessageMembers.vue"),
        props: true,
      },
      {
        path: "admin/users",
        component: () => import("pages/Admin/UsersList.vue"),
      },
      {
        path: "admin/users/new",
        component: () => import("pages/Admin/UserCreate.vue"),
        props: true,
      },
      {
        path: "admin/users/:id",
        component: () => import("pages/Admin/UserEdit.vue"),
        props: true,
      },
      {
        path: "admin/grades",
        component: () => import("pages/Admin/GradesPage.vue"),
      },
      {
        path: "admin/grades/:id",
        component: () => import("pages/Admin/GradeDetails.vue"),
        props: true,
      },
      {
        path: "admin/subjects",
        component: () => import("pages/Admin/SubjectsPage.vue"),
      },
      {
        path: "admin/groups",
        component: () => import("pages/Admin/GroupsPage.vue"),
      },
      {
        path: "admin/groups/:id",
        component: () => import("pages/Admin/GroupEdit.vue"),
        props: true,
      },
      {
        path: "admin/classes",
        component: () => import("pages/Admin/ClassesPage.vue"),
      },
      {
        path: "admin/classes/:id",
        component: () => import("pages/Admin/ClassDetails.vue"),
        props: true,
      },
      {
        path: "teacher/journals",
        component: () => import("pages/Teacher/JournalsList.vue"),
      },
      {
        path: "teacher/journals/new",
        component: () => import("pages/Teacher/JournalGeneral.vue"),
        props: { isCreate: true },
      },
      {
        path: "teacher/journals/:id",
        component: () => import("pages/Teacher/JournalDetail.vue"),
        props: true,
      },
      {
        path: "teacher/lessons/:id",
        component: () => import("pages/Teacher/LessonDetail.vue"),
        props: true,
      },
      {
        path: "teacher/classes",
        component: () => import("pages/Teacher/ClassesList.vue"),
      },
      {
        path: "teacher/classes/:id",
        component: () => import("pages/Teacher/ClassesDetail.vue"),
        props: true,
      },
    ],
  },

  {
    path: "/access-denied",
    component: () => import("pages/ErrorAccessDenied.vue"),
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
