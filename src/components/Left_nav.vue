<!-- 左侧边栏 -->
<template>
  <el-container>
    <div class="nav">
      <el-row class="tac">
          <div class="logo-top">
            <el-image
                :src="logo1"
                style="width: 50px; height: 50px"
                class="logoImg"
              ></el-image>
            <h3 class="title">网盘系统</h3>
          </div>
          <el-container>
           <el-aside>
              <el-menu
              :router="true"
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>首页</span>
                </template>
                <el-menu-item index="/home/allfile">全部文件</el-menu-item>
                <el-menu-item index="/home/delete">删除文件</el-menu-item>
                <el-menu-item index="/home/share">上传分享文件</el-menu-item>
                <el-menu-item index="/home/myshare">我的分享</el-menu-item>
                <el-menu-item index="/home/cancel-share">取消分享</el-menu-item>
              </el-submenu>

              <el-menu-item index="/home/transmit">
                <i class="el-icon-upload"></i>
                <span slot="title">传输</span>
              </el-menu-item>

              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-s-custom"></i>
                  <span>个人中心</span>
                </template>
                <el-menu-item index="/home/baseInfo">基本信息</el-menu-item>
              </el-submenu>

              <el-button class="drop">退出账号</el-button>
            </el-menu>
           </el-aside>
           <el-main class="mainbox">
             <router-view></router-view>
           </el-main>
          </el-container>
      </el-row>
    </div>
  </el-container>
</template>

<script>
import logo1 from "/src/assets/images/logo1.png";
export default {
  data(){
    return {
      logo1
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.nav {
  /* width: 100px; */
  height: 700px;
  box-shadow: 2px 2px 2px 2px rgba(147, 147, 147, 0.1);
}
/* .tac {
  width: 400px;
} */
.el-menu-vertical-demo {
  margin-top: 10px;
}
.title {
  color: black;
  text-align: center;
  margin-top: 30px;
  margin-left: 20px;
}
.logoImg{
  margin-top: 20px;
  margin-left: 20px;
}
.drop {
  margin-top: 100px;
  margin-left: 50px;
}
.logo-top {
  display: flex;
}

h3 {
  margin: 0px 15px;
  text-align: center;
}
.svg-icon {
  margin-left: 20px;
  margin-top: 20px;
}
.mainbox{
  width:calc(100vw - 320px);
  margin-top:-30px;
}
</style>
