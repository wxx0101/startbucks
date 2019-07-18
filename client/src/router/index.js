import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [ 
  {
    path: '/Home',
    name: 'Home',
    component: ()=>import("../components/Home.vue"),
    children: [
      {
        path: "Notprocessed",
        name: "Notprocessed",
        meta: {
          title: "首页"
        },
        component: ()=> import("../views/Home/Notprocessed.vue"),
      },
      {
        path: "Send",
        name: "Send",
        meta: {
          title: "首页"
        },
        component: ()=>import("../views/Home/Send.vue"),
      },
      {
        path: "Processed",
        name: "Processed",
        meta: {
          title: "首页"
        },
        component: ()=>import("../views/Home/Processed.vue"),
      }
    ]
  },
  {
    path: "/Login",
    component: () => import("../views/login/Login.vue"),
    meta: {
      title: "登录"
    }
  },
  {
    path: "/",
    redirect: "/Home/Notprocessed"
  },
  {
    path: "/timeEdit/:types/:id",
    props: true,
    component: () => import("../views/timeEdit.vue")
  },
  {
    path: "/Application/:types",
    props: true,
    component: () => import("../views/Application.vue")
  },
  {
    path: "/historyCon/:code",
    props: true,
    component: () => import("../views/historyCon.vue")
  },
  {
    path: "/register",
    component: () => import("../views/login/register.vue")
  },
  {
    path: "/search",
    component: () => import("../views/search.vue")
  }
]

const router = new Router({routes});

router.beforeEach((to, from, next) => {
  document.title =to.meta.title ? to.meta.title : (to.params.types=="overtime"?"加班详情":"休假详情");
  next()
})

export default router;