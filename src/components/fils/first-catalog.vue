<template>
  <div>
    <!-- <p>{{this.$route.params.path[1]}}</p> -->
    <el-form v-model="fils">
      <div v-for="(item, index) in fils" :key="index">
        <div style="float: left">
          <div class="filbox">
            <el-image
              :src="bgcImg"
              style="width: 100px; height: 100px"
            ></el-image>
            <span v-if="item.type==='DIRECTORY'" class="filPath" @click="goFile(item.file_name)">{{
              item.file_name
            }}</span>
            <span v-else class="filPath">{{ item.file_name }}</span>
            <div>文件类型：{{ item.type }}</div>
          </div>
        </div>
      </div>
    </el-form>
    <!-- <div style="float: left">
          <div class="filbox">
            <el-image
                :src="bgcImg"
                style="width: 100px; height: 100px"
              ></el-image>
            <span class="filPath" @click="goFile(item.file_name)">{{this.$route.params.name}}</span>
            <div>文件类型：{{ item.type }}</div>
          </div>
        </div> -->
  </div>
</template>

<script>
import bgcImg from "/src/assets/images/title.jpg";
import getfile from "/src/api/file";
export default {
  name: "FirstCatalog",
  data() {
    return {
      bgcImg,
      data: [],
      fils: [],
    };
  },
  methods: {
    getfils() {
      let require_path = this.data;
      let token = localStorage.getItem("token");
      getfile(token, require_path).then((res) => {
        this.fils = res.data;
      });
    },
    goFile(name) {
      // console.log(e);
      // var test = e.split("\\");
      // console.log(test);
      this.$router.push({
        path:"/home/allfile/second-catalog",
        name:"SecondCatalog",
        params: {
          name,
          lastName:this.data
        },
      });
    },
  },
  mounted() {
    console.log(this.$route.params.name);
    this.data = this.$route.params.name;
    console.log(this.data);
    this.getfils()
  },
};
</script>

<style scoped>
.filbox {
  width: 1000px;
  height: 100px;
  margin-top: 20px;
  margin-left: 80px;
  border: 1px solid #ddd;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.filPath{
  display:inline-block;
  height:100px;
  width:400px;
  line-height:100px;
  flex-shrink:0;
  font-size:14px;
  margin-left:20px;
}
</style>
