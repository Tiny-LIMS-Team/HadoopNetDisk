import Vue from "vue"; //引入Vue
import Router from "vue-router"; //引入vue-router
import Register from "../views/user/register.vue"; //引入根目录下的Hello.vue组件
import Login from "../views/user/login.vue";
import Homepage from "../components/Left_nav.vue";
import AllFile from "../components/configuration/AllFile.vue";
import ClassFy from "../components/configuration/ClassiFy.vue";
import MyShare from "../components/configuration/MyShare.vue";
import Transmit from "../components/configuration/Transmit.vue";
import BaseInfor from "../components/configuration/BaseInfor.vue";
import UserManagement from "../components/configuration/user-manage.vue";
import FirstCatalog from "../components/fils/first-catalog.vue";
import SecondCatalog from "../components/fils/second-catalog.vue";
import deleteFile from "../components/configuration/deleteFile.vue";
import share from "../components/configuration/share.vue";
import CancelFile from "../components/configuration/cancelFile.vue"

import VueRouter from "vue-router";
Vue.use(VueRouter);
const RouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
  return RouterPush.call(this, to).catch((err) => err);
};
const RouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(to) {
  return RouterReplace.call(this, to).catch((err) => err);
};

Vue.use(Router); //Vue全局使用Router

export default new Router({
  routes: [
    //配置路由，这里是个数组
    {
      //每一个链接都是一个对象
      path: "/", //链接路径
      name: "Login", //路由名称，
      component: Login, //对应的组件模板
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    // {
    //   path:'/index',
    //   name:'index',
    //   component:index,
    //   children:[
    //     {
    //       path:'/index/allfile',
    //       name:'AllFile',
    //       component:AllFile
    //     },
    //     {
    //       path:'/index/classfy',
    //       name:'ClassFy',
    //       component:ClassFy
    //     },
    //     {
    //       path:'/index/myshare',
    //       name:'MyShare',
    //       component:MyShare
    //     },
    //     {
    //       path:'/index/transmit',
    //       name:'Transmit',
    //       component:Transmit
    //     },
    //     {
    //       path:'/index/baseInfo',
    //       name:'BaseInfor',
    //       component:BaseInfor
    //     },
    //     {
    //       path:'/index/user-management',
    //       name:'UserManagement',
    //       component:UserManagement
    //     },
    //   ]
    // },

    {
      path: "/home",
      name: "Homepage",
      component: Homepage,
      children: [
        {
          path: "/home/allfile",
          name: "AllFile",
          component: AllFile,
          // children:[
          //   {path:'/home/allfile/first-catalog',name:'FirstCatalog',component:FirstCatalog}
          // ]
        },
        {
          path: "/home/classfy",
          name: "ClassFy",
          component: ClassFy,
        },
        {
          path: "/home/myshare",
          name: "MyShare",
          component: MyShare,
        },
        {
          path: "/home/transmit",
          name: "Transmit",
          component: Transmit,
        },
        {
          path: "/home/baseInfo",
          name: "BaseInfor",
          component: BaseInfor,
        },
        {
          path: "/home/user-management",
          name: "UserManagement",
          component: UserManagement,
        },
        {
          path: "/home/allfile/first-catalog",
          name: "FirstCatalog",
          component: FirstCatalog,
        },
        {
          path:"/home/allfile/second-catalog",
          name:"SecondCatalog",
          component:SecondCatalog
        },
        {
          path:"/home/delete",
          name:"deleteFile",
          component:deleteFile
        },
        {
          path:"/home/share",
          name:"Share",
          component:share
        },
        {
          path:"/home/cancel-share",
          name:"CancelFile",
          component:CancelFile
        }
      ],
    },
  ],
});
