<template>
  <div>
    <h1>取消分享</h1>
    <p style="margin-top: 20px">请输入分享文件名</p>
    <el-input v-model="file_name"></el-input>
    <p style="margin-top: 20px">请输入分享密码</p>
    <el-input v-model="share_password" type="password" show-password></el-input>
    <el-button @click="cancelFils" type="primary" style="margin-top: 20px"
      >确定提交</el-button
    >
  </div>
</template>

<script>
import cancelShare from "/src/api/cancelShare";
export default {
  name: "CancelFile",
  data() {
    return {
      file_name: "",
      share_password: "",
    };
  },
  methods: {
    cancelFils() {
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(this.file_name);
      console.log(this.share_password);
      cancelShare(token, this.file_name, this.share_password).then((res) => {
        if (res.data.code == 200) {
          this.$message({
            showClose: true,
            message: "取消分享成功",
            type: "success",
          });
        }
      });
    },
  },
};
</script>

<style scoped></style>
