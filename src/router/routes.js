const routes = [
  {
    path: '/theme3',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  { path: '/home1',  name: "home1Page",component: () => import('pages/IndexPage1.vue') },
  { path: '/home2',  name: "home2Page",component: () => import('pages/IndexPage2.vue') },
  { path: '/editor',  name: "00home2Page",component: () => import('pages/EditorPage.vue') },

  // { path: '/',  name: "00home2Pageq",component: () => import('pages/EditorPage.vue') },
  { path: '/',  name: "00home2Pageq",component: () => import('pages/PortifolioPage.vue') },



  // { path: "/login-001",  name: "sa", component: () => import("pages/auth/LoginPage.vue") },
  { path: "/login-sambo",  name: "kajskjg", component: () => import("pages/auth/LoginPageSambo.vue") },
  { path: "/register-sambo",  name: "register2", component: () => import("pages/auth/RegisterPageSambo.vue") },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
